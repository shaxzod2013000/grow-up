import { motion } from "framer-motion";

const COLUMNS = [
  {
    title: "Resources",
    links: ["Docs", "Pricing", "Jobs", "Job Board", "Documents"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Brand Sheet", "Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "Legal",
    links: ["Terms of Use", "Privacy Policy", "AZURE (2FI regulated)", "Guidelines"],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <span
        aria-hidden="true"
        className="absolute -left-10 top-16 h-20 w-20 rounded-tr-full rounded-br-full rounded-tl-full bg-accent-orange"
      />
      <span
        aria-hidden="true"
        className="absolute right-10 top-24 h-14 w-14 rounded-full bg-accent-blue"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-navy-soft/60 blur-2xl"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-6 pb-16 pt-24 sm:pb-20 sm:pt-28 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-lg text-center"
        >
          <p className="text-[13px] font-semibold uppercase tracking-wide text-white/50">
            Get started
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            It's easy to get started. Start now.
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="focus-ring w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40"
            />
            <button
              type="submit"
              className="focus-ring inline-flex shrink-0 items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_-8px_rgba(53,86,245,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Get Started
            </button>
          </form>
        </motion.div>

        <div className="mt-24 grid grid-cols-2 gap-10 border-t border-white/10 pt-14 sm:grid-cols-4 sm:gap-6">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-display text-lg font-extrabold">Spellon.</p>
            <p className="mt-4 max-w-[180px] text-[13px] leading-relaxed text-white/50">
              No.1 West, South New Metropolitan State
            </p>
            <p className="mt-2 text-[13px] text-white/50">+1 (00) 234-5678</p>
            <p className="text-[13px] text-white/50">info@spellon.com</p>
            <div className="mt-4 flex gap-3 text-white/50">
              {["𝕏", "in", "◎"].map((icon, i) => (
                <span
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-xs"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="focus-ring text-[13px] text-white/50 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-14 border-t border-white/10 pt-6 text-center text-[12px] text-white/40">
          © 2021 Hello. All rights reserved.
        </p>
      </div>
    </footer>
  );
}