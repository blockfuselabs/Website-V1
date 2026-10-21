import Link from "next/link";

const REPEATS = 4;

const APPLY_LINK =
  "font-semibold text-[#e9d5ff] transition-colors hover:text-white";

function TickerItem() {
  return (
    <span className="flex shrink-0 items-center whitespace-nowrap font-sans text-[10px] font-medium uppercase tracking-[0.14em] sm:text-[11px]">
      <Link href="/apply" tabIndex={-1} className={APPLY_LINK}>
        Apply Today
      </Link>
      <span aria-hidden="true" className="px-5 text-white/50 sm:px-7">
        •
      </span>
      <span className="tracking-[0.09em] text-white/90">
        Enrollment for December 2026 cohort ongoing
      </span>
      <span aria-hidden="true" className="px-5 text-white/50 sm:px-7">
        •
      </span>
    </span>
  );
}

/** Slow announcement ticker pinned above the header. */
export function AnnouncementBar() {
  return (
    <div className="border-b border-black/10 bg-(--action-bg) dark:border-white/10">
      <div
        aria-hidden="true"
        className="group relative w-full overflow-hidden py-2.5 [mask-image:linear-gradient(to_right,transparent,#000_4%,#000_96%,transparent)] motion-reduce:[mask-image:none]"
      >
        <div className="flex w-max animate-marquee items-center [--marquee-duration:110s] [will-change:transform] group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:[will-change:auto]">
          {Array.from({ length: 2 }).map((_, half) => (
            <div key={half} className="flex shrink-0 items-center">
              {Array.from({ length: REPEATS }).map((__, index) => (
                <TickerItem key={index} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="sr-only">
        Apply today — enrollment for December 2026 cohort ongoing.{" "}
        <Link href="/apply">Apply now</Link>
      </p>
    </div>
  );
}
