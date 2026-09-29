import https from "node:https";
import { contentApiUrl } from "@/lib/content-api";

/** Raw record returned by the events API. */
export interface ApiEvent {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string | null;
  link: string | null;
  youtube_link: string | null;
  twitter_link: string | null;
  start_date: string | null;
  end_date: string | null;
  createdAt: string | null;
}

/**
 * Events API: <BLOCKFUSE_API_BASE_URL>/events (separate host from
 * NEXT_PUBLIC_API_URL). Server-only — the base lives in .env, never hardcoded
 * and never shipped to the browser.
 */
export const EVENTS_API_URL = contentApiUrl("/events");

interface EventsPage {
  events?: ApiEvent[];
  pagination?: { has_next_page?: boolean };
}

/**
 * Server-side GET for the events API.
 *
 * - family: 4 — this host's AAAA is a NAT64 prefix that Node cannot reach
 *   (Happy Eyeballs then sits on ETIMEDOUT).
 */
function getJson(url: string, timeoutMs = 8000): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const req = https.request(
      {
        hostname: parsed.hostname,
        path: `${parsed.pathname}${parsed.search}`,
        method: "GET",
        family: 4,
        servername: parsed.hostname,
        headers: { Accept: "application/json" },
        timeout: timeoutMs,
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          if (res.statusCode && res.statusCode >= 400) {
            reject(new Error(`Events API ${res.statusCode}`));
            return;
          }
          try {
            resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
          } catch (err) {
            reject(err);
          }
        });
      },
    );
    req.on("timeout", () => req.destroy(new Error("Events API timeout")));
    req.on("error", reject);
    req.end();
  });
}

function guard(): boolean {
  if (EVENTS_API_URL) return true;
  console.error(
    "[events] BLOCKFUSE_API_BASE_URL is not set — add it to frontend/.env (see .env.example).",
  );
  return false;
}

/** Every event, across every page (the API returns 10 per page). */
export async function loadEvents(): Promise<ApiEvent[]> {
  if (!guard()) return [];

  const events: ApiEvent[] = [];
  const seen = new Set<number>();

  for (let page = 1; page <= 50; page++) {
    let body: { data?: EventsPage };
    try {
      body = (await getJson(`${EVENTS_API_URL}?page=${page}`)) as {
        data?: EventsPage;
      };
    } catch {
      // API unreachable — the caller keeps whatever the primary source returned.
      break;
    }

    const batch = body?.data?.events;
    if (!Array.isArray(batch) || batch.length === 0) break;

    for (const event of batch) {
      if (!event || seen.has(event.id)) continue;
      seen.add(event.id);
      events.push(event);
    }

    if (!body?.data?.pagination?.has_next_page) break;
  }

  return events;
}

/** Single event by numeric id or slug, or null when it does not exist. */
export async function loadEvent(
  idOrSlug: number | string,
): Promise<ApiEvent | null> {
  if (!EVENTS_API_URL || idOrSlug === "" || idOrSlug === null) return null;

  try {
    const json = (await getJson(
      `${EVENTS_API_URL}/${encodeURIComponent(String(idOrSlug))}`,
    )) as { event?: ApiEvent };
    return json?.event ?? null;
  } catch {
    return null;
  }
}
