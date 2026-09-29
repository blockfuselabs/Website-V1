import type { ReactNode } from "react";

const IMAGE_MD = /!\[[^\]]*\]\([^)]*\)/g;
const LINK_MD = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Drops headings, bullets, quotes and emphasis markers from one line run. */
function plain(text: string): string {
  return text
    .replace(IMAGE_MD, " ")
    .replace(/^[\s>#*\-]+/gm, " ")
    .replace(/[*_`~]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Card excerpt: markdown reduced to one plain, length-capped line. */
export function excerpt(text: string, max = 180): string {
  const value = plain((text || "").replace(LINK_MD, "$1"));
  return value.length > max ? `${value.slice(0, max).trimEnd()}…` : value;
}

/**
 * Renders one description paragraph, keeping `[label](url)` links clickable
 * and stripping every other markdown marker. Event write-ups arrive from the
 * API as markdown; the page shows plain prose.
 */
export function inlineNodes(paragraph: string): ReactNode[] {
  const text = (paragraph || "").replace(IMAGE_MD, " ");
  const nodes: ReactNode[] = [];
  const links = new RegExp(LINK_MD.source, "g");
  let cursor = 0;
  let index = 0;
  let match = links.exec(text);

  const push = (value: string) => {
    const value_ = plain(value);
    if (value_) nodes.push(<span key={`t${index++}`}>{value_}</span>);
  };

  while (match) {
    push(text.slice(cursor, match.index));
    nodes.push(
      <a
        key={`l${index++}`}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4"
      >
        {plain(match[1])}
      </a>,
    );
    cursor = match.index + match[0].length;
    match = links.exec(text);
  }

  push(text.slice(cursor));
  return nodes;
}
