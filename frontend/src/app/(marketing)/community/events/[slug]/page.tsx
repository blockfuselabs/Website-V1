import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ModalButton } from "@/components/ui/modal-button";
import { loadEvent } from "@/features/events/api";
import { inlineNodes, excerpt } from "@/features/events/format";
import { API_URL } from "@/lib/api";
import { EYEBROW, BTN_PRIMARY } from "@/lib/styles";

type Props = { params: Promise<{ slug: string }> };

interface BackendEvent {
  id: number;
  title: string;
  slug: string;
  description: string;
  date: string | null;
  /** Only the events API supplies an end date — the primary backend has none. */
  end_date?: string | null;
  location: string | null;
  image_url: string | null;
  link: string | null;
  youtube?: string | null;
  twitter?: string | null;
  createdAt: string;
}

async function fetchEvent(idOrSlug: string): Promise<BackendEvent | null> {
  try {
    const res = await fetch(`${API_URL}/events/${idOrSlug}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    const json = await res.json() as { success: boolean; data?: BackendEvent };
    if (json.success && json.data) return json.data;
  } catch {
    // Backend unreachable — fall through to the events API.
  }

  // <BLOCKFUSE_API_BASE_URL>/events/:id — also resolves a slug.
  const event = await loadEvent(idOrSlug);
  if (!event) return null;
  return {
    id: event.id,
    title: event.title,
    slug: event.slug,
    description: event.description,
    date: event.start_date,
    end_date: event.end_date,
    location: null,
    image_url: event.image,
    link: event.link,
    youtube: event.youtube_link,
    twitter: event.twitter_link,
    createdAt: event.createdAt ?? event.start_date ?? "",
  };
}

function longDate(value: string | null | undefined): string {
  const time = value ? Date.parse(value) : NaN;
  if (Number.isNaN(time)) return "";
  return new Date(time).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function eventDate(event: BackendEvent) {
  const start = event.date || event.createdAt;
  const startMs = Date.parse(start);
  const endMs = Date.parse(event.end_date || "");
  if (Number.isNaN(startMs)) return longDate(start);
  if (Number.isNaN(endMs) || endMs <= startMs) return longDate(start);

  const startDate = new Date(startMs);
  const endDate = new Date(endMs);
  const sameYear = startDate.getFullYear() === endDate.getFullYear();
  const sameMonth =
    sameYear && startDate.getMonth() === endDate.getMonth();

  if (sameMonth) {
    return `${startDate.toLocaleDateString("en-US", { month: "long" })} ${startDate.getDate()} – ${endDate.getDate()}, ${endDate.getFullYear()}`;
  }
  return `${longDate(start)} – ${longDate(event.end_date)}`;
}

function paragraphs(text: string): string[] {
  return (text || "").split(/\n+/).map((p) => p.trim()).filter(Boolean);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = await fetchEvent(slug);
  return {
    title: event ? `${event.title} | Blockfuse Labs` : "Event not found",
    description: event ? excerpt(event.description, 160) : undefined,
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = await fetchEvent(slug);
  if (!event) notFound();

  const image = event.image_url || "/brand/eventbg.JPG";
  const body = paragraphs(event.description);
  const socialLinks = [
    { href: event.youtube, label: "Watch the recap" },
    { href: event.twitter, label: "See the post on X" },
  ].filter((item): item is { href: string; label: string } => Boolean(item.href));

  return (
    <main>
      <header className="relative isolate overflow-hidden bg-(--color-ink) px-5 py-12 text-[var(--color-paper)] sm:px-7 sm:py-16">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,7,10,0.78)_0%,rgba(7,7,10,0.74)_50%,rgba(7,7,10,0.9)_100%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1120px]">
          <Link href="/community/events" className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">← All events</Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">Community event / {eventDate(event)}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight drop-shadow-sm sm:text-5xl">{event.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted-light)]">{inlineNodes(body[0])}</p>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-12 sm:px-7 sm:py-16 lg:grid-cols-[280px_1fr]">
        <aside className="self-start rounded-2xl border border-[var(--line-strong)] p-6 lg:sticky lg:top-28">
          <span className={EYEBROW}>Event information</span>
          <h2 className="mt-4 text-xl font-bold">{event.title}</h2>
          <dl className="mt-6 space-y-5 text-sm">
            <div><dt className="text-[var(--muted)]">When</dt><dd className="mt-1 font-semibold">{eventDate(event)}</dd></div>
            <div><dt className="text-[var(--muted)]">Where</dt><dd className="mt-1 font-semibold">{event.location || "Jos, Nigeria"}</dd></div>
          </dl>
          {event.link && event.link !== "#" && (
            <a href={event.link} target="_blank" rel="noopener noreferrer" className={`${BTN_PRIMARY} mt-6 w-full`}>
              Register
            </a>
          )}
          {socialLinks.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">
              {item.label} <span aria-hidden="true" className="ml-1">↗</span>
            </a>
          ))}
          <p className="mt-6 border-t border-[var(--line)] pt-5 text-sm leading-relaxed text-[var(--muted)]">Interested in supporting a future event?</p>
          <Link href="/contact" className="mt-4 inline-flex min-h-11 items-center font-semibold underline underline-offset-4">Get in touch →</Link>
        </aside>
        <article>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--surface-2)]"><Image src={image} alt="" fill preload sizes="(min-width: 1024px) 720px, 100vw" className="object-cover" /></div>
          <p className="mt-3 text-xs text-[var(--muted)]">From the Blockfuse Labs community photo collection.</p>
          <h2 className="mt-9 text-3xl font-bold">About the gathering</h2>
          <div className="mt-5 space-y-5 text-base leading-loose text-[var(--muted)]">
            {body.map((paragraph) => (
              <p key={paragraph.slice(0, 64)}>{inlineNodes(paragraph)}</p>
            ))}
          </div>
          <div className="mt-9 border-t border-[var(--line)] pt-8"><h2 className="text-2xl font-bold">Help shape the next edition.</h2><p className="mb-5 mt-3 text-sm leading-relaxed text-[var(--muted)]">Connect with us about supporting a future community event.</p><ModalButton modal="sponsor" variant="secondary">Become a partner</ModalButton></div>
        </article>
      </div>
    </main>
  );
}