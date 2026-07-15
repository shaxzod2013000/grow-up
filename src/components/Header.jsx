import { useEffect, useState } from "react";

const NAV_LINKS = ["Docs", "Tools", "Features", "Pricing", "Jobs"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(20,18,58,0.06)]"
          : "bg-white/0"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1180px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-display text-xl font-extrabold tracking-tight text-ink">
          Hello<span className="text-brand">UI</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="focus-ring text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#signin"
            className="focus-ring text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
          >
            Sign in
          </a>
          <a
            href="#try"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_-8px_rgba(53,86,245,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            Try for Free
          </a>
        </div>

        <button
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path
                d="M4 4L18 18M18 4L4 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2 6H20M2 11H20M2 16H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/5 bg-white px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[15px] font-medium text-ink-soft"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            <a href="#signin" className="text-[15px] font-medium text-ink-soft">
              Sign in
            </a>
            <a
              href="#try"
              className="focus-ring mt-2 inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Try for Free
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}