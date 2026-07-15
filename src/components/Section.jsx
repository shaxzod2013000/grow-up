import { motion } from "framer-motion";

/* ---------------------------------- data ---------------------------------- */

const LOGOS = ["JILL", "Netflix", "HubSpot", "▲ ATLASSIAN", "Juniper", "LACOSTE"];

const FEATURES = [
  {
    eyebrow: "Step one",
    title: "Develop",
    body: "Develop for all your users' devices with just one codebase. Add fast refresh, true native capabilities, test your creativity, and you'll have the app your users want in no time.",
    variant: "code",
  },
  {
    eyebrow: "Step two",
    title: "Build",
    body: "Build for all your users' devices with just one codebase. Add fast refresh, true native capabilities, test your creativity, and you'll have the app your users want in no time.",
    variant: "laptop",
    reverse: true,
  },
  {
    eyebrow: "Step three",
    title: "Update",
    body: "Develop for all your users' devices with just one codebase. Add fast refresh, true native capabilities, and your creativity, and you'll have the app your users want in no time.",
    variant: "phone",
  },
];

const QUOTE =
  "It's difficult to make a tool that's powerful, easy to use, and adapts well to any workflow. Zenpay figured it out and it's one of the most pleasurable new experiences I've had testing a product.";

const TESTIMONIALS = [
  { name: "Lisa Miller", handle: "@LisaMillerCoo" },
  { name: "Rit", handle: "@ritzOsphinger" },
  { name: "Cass McKeen", handle: "@LisaMillerCoo" },
  { name: "Alex Johnson", handle: "@LisaMillerCoo" },
  { name: "Lisa Miller", handle: "@LisaMillerCoo" },
  { name: "Traver", handle: "@LisaMillerCoo" },
].map((t) => ({ ...t, quote: QUOTE }));

const AVATAR_COLORS = ["#3556F5", "#FF9F43", "#35C9B0", "#FF5B5B", "#6E4CF5", "#3B6BFF"];

/* ------------------------------ hero graphic ------------------------------ */

function DashboardMockup() {
  const bars = [40, 65, 30, 80, 55, 90, 45, 70, 35, 60, 85, 50];
  const linePoints =
    "0,55 30,40 60,58 90,35 120,50 150,25 180,45 210,20 240,38 270,15 300,30";

  return (
    <div className="relative mx-auto w-full max-w-[900px] rounded-2xl border border-ink/5 bg-white p-3 shadow-soft sm:p-4">
      <div className="mb-3 flex items-center gap-1.5 px-1">
        <span className="h-2.5 w-2.5 rounded-full bg-accent-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-orange/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-teal/70" />
      </div>

      <div className="grid grid-cols-[56px_1fr_140px] gap-3 sm:grid-cols-[64px_1fr_170px]">
        <div className="flex flex-col items-center gap-4 rounded-xl bg-surface-muted py-4">
          <span className="h-5 w-5 rounded-md bg-brand" />
          {["Dashboard", "Analytics", "Users", "Sales", "Files", "Support"].map((label, i) => (
            <span
              key={label}
              className={`h-2 w-6 rounded-full ${i === 0 ? "bg-brand/70" : "bg-ink/10"}`}
            />
          ))}
        </div>

        <div className="min-w-0 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-gradient-to-br from-brand to-[#6E4CF5] p-3.5 text-white sm:p-4">
              <p className="text-[10px] opacity-80 sm:text-xs">Total Revenue</p>
              <p className="mt-2 font-display text-lg font-bold sm:text-xl">$59.1k</p>
              <p className="mt-1 text-[10px] opacity-75 sm:text-xs">+12.4% this month</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-[#6E4CF5] to-[#3556F5] p-3.5 text-white sm:p-4">
              <p className="text-[10px] opacity-80 sm:text-xs">Active Users</p>
              <p className="mt-2 font-display text-lg font-bold sm:text-xl">12.5k</p>
              <p className="mt-1 text-[10px] opacity-75 sm:text-xs">+2.6k new today</p>
            </div>
          </div>

          <div className="rounded-xl border border-ink/5 bg-white p-3.5 sm:p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[11px] font-semibold text-ink sm:text-xs">Statistics</p>
              <span className="rounded-full bg-brand-light px-2 py-0.5 text-[9px] font-medium text-brand">
                This week
              </span>
            </div>
            <svg viewBox="0 0 300 70" className="h-16 w-full sm:h-20">
              {bars.map((h, i) => (
                <rect
                  key={i}
                  x={i * 25}
                  y={70 - h * 0.7}
                  width="12"
                  height={h * 0.7}
                  rx="3"
                  fill={i % 3 === 0 ? "#3556F5" : "#DCE1FB"}
                />
              ))}
            </svg>
          </div>

          <div className="rounded-xl border border-ink/5 bg-white p-3.5 sm:p-4">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[11px] font-semibold text-ink sm:text-xs">Productivity</p>
              <span className="rounded-full bg-accent-teal/10 px-2 py-0.5 text-[9px] font-medium text-accent-teal">
                Trending
              </span>
            </div>
            <svg viewBox="0 0 300 70" className="h-14 w-full sm:h-16">
              <polyline
                points={linePoints}
                fill="none"
                stroke="#FF9F43"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="hidden flex-col gap-3 sm:flex">
          <div className="rounded-xl bg-accent-orange/90 p-3 text-white">
            <p className="text-[10px] opacity-90">Weekly Goal</p>
            <p className="mt-2 font-display text-base font-bold">86%</p>
          </div>
          <div className="flex-1 rounded-xl border border-ink/5 bg-white p-3">
            <p className="mb-2 text-[10px] font-semibold text-ink">Team Activity</p>
            {[1, 2, 3].map((i) => (
              <div key={i} className="mb-2 flex items-center gap-2 last:mb-0">
                <span className="h-5 w-5 shrink-0 rounded-full bg-brand-light" />
                <span className="h-1.5 w-full rounded-full bg-ink/8" />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center rounded-xl border border-ink/5 bg-white py-2">
            <svg width="34" height="34" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15" fill="none" stroke="#EEF1FF" strokeWidth="4" />
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="#3556F5"
                strokeWidth="4"
                strokeDasharray="70 100"
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingShapes() {
  const SHAPES = [
    { type: "square", color: "#FF5B5B", top: "8%", left: "-2%", size: 16, delay: 0 },
    { type: "circle", color: "#FFC24B", top: "38%", left: "-6%", size: 14, delay: 0.4 },
    { type: "square", color: "#FF5B5B", top: "62%", left: "-3%", size: 10, delay: 0.8 },
    { type: "rect", color: "#3B6BFF", top: "84%", left: "4%", size: 18, delay: 1.2 },
    { type: "square", color: "#FF5B5B", top: "6%", right: "-2%", size: 16, delay: 0.2 },
    { type: "circle", color: "#FFC24B", top: "40%", right: "-6%", size: 14, delay: 0.6 },
    { type: "triangle", color: "#FF5B5B", top: "78%", right: "-2%", size: 16, delay: 1 },
  ];

  const Shape = ({ type, color, size }) => {
    if (type === "circle")
      return (
        <span
          className="block rounded-full border-2"
          style={{ width: size, height: size, borderColor: color }}
        />
      );
    if (type === "rect")
      return (
        <span
          className="block rounded-[3px] border-2"
          style={{ width: size * 1.4, height: size * 0.7, borderColor: color }}
        />
      );
    if (type === "triangle")
      return (
        <svg width={size} height={size} viewBox="0 0 20 20">
          <polygon points="10,2 18,17 2,17" fill="none" stroke={color} strokeWidth="2" />
        </svg>
      );
    return (
      <span
        className="block rounded-[3px] border-2"
        style={{ width: size, height: size, borderColor: color }}
      />
    );
  };

  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
      {SHAPES.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: s.top, left: s.left, right: s.right }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
        >
          <Shape type={s.type} color={s.color} size={s.size} />
        </motion.div>
      ))}
      <svg className="absolute -left-10 top-1/3 h-40 w-24 opacity-40" viewBox="0 0 100 160" fill="none">
        <path d="M0 0 L60 60" stroke="#35C9B0" strokeWidth="1.5" />
      </svg>
      <svg className="absolute -right-8 top-2/3 h-40 w-24 opacity-40" viewBox="0 0 100 160" fill="none">
        <path d="M100 0 L40 50" stroke="#FFC24B" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/* ---------------------------- feature graphics ---------------------------- */

function FeatureIllustration({ variant }) {
  const base =
    "relative aspect-square w-full max-w-[340px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#241C6B] via-[#1B1450] to-[#0F0B33] p-7 shadow-soft";

  if (variant === "laptop")
    return (
      <div className={base}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,159,67,0.2),transparent_55%)]" />
        <div className="relative flex h-full items-center justify-center">
          <div className="w-[78%] -rotate-6">
            <div className="rounded-t-lg border-4 border-b-0 border-white/15 bg-white/5 p-3 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-1.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={i}
                    className="aspect-square rounded"
                    style={{ background: i === 0 ? "#6BD6FF" : "rgba(255,255,255,0.12)" }}
                  />
                ))}
              </div>
            </div>
            <div className="h-2 rounded-b-lg bg-white/20" />
          </div>
          <div className="absolute right-[18%] top-[22%] flex h-10 w-10 rotate-6 items-center justify-center rounded-xl bg-gradient-to-br from-accent-orange to-[#FF5B5B] shadow-lg">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 12 L8 2 L14 12" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    );

  if (variant === "phone")
    return (
      <div className={base}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_75%,rgba(107,214,255,0.22),transparent_55%)]" />
        <div className="relative flex h-full items-center justify-center">
          <div className="h-[85%] w-[46%] rounded-[22px] border-4 border-white/15 bg-white/5 p-2 backdrop-blur-sm">
            <div className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
              <span className="h-8 w-8 rounded-full bg-accent-teal/70" />
              <span className="h-1.5 w-10 rounded-full bg-white/25" />
              <span className="h-1.5 w-7 rounded-full bg-white/15" />
            </div>
          </div>
          <svg className="absolute -right-2 top-1/4 h-16 w-16 text-white/10" viewBox="0 0 40 40" fill="none">
            <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
            <circle cx="28" cy="26" r="9" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>
    );

  const lines = [70, 45, 85, 30, 60, 90, 40];
  return (
    <div className={base}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(107,214,255,0.25),transparent_55%)]" />
      <div className="relative flex h-full flex-col justify-end">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent-red/70" />
          <span className="h-2 w-2 rounded-full bg-accent-orange/70" />
          <span className="h-2 w-2 rounded-full bg-accent-teal/70" />
        </div>
        <div className="rounded-xl bg-white/5 p-4 backdrop-blur-sm ring-1 ring-white/10">
          {lines.map((w, i) => (
            <div key={i} className="mb-2 flex items-center gap-2 last:mb-0">
              <span className="text-[10px] text-white/25">{i + 1}</span>
              <span
                className="h-1.5 rounded-full"
                style={{ width: `${w}%`, background: i % 2 === 0 ? "#6BD6FF" : "rgba(255,255,255,0.25)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureRow({ eyebrow, title, body, variant, reverse }) {
  return (
    <div
      className={`relative flex flex-col items-center gap-10 py-14 sm:py-20 md:flex-row md:gap-16 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 24 : -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative flex w-full justify-center md:w-1/2"
      >
        <span
          aria-hidden="true"
          className={`absolute -z-10 h-16 w-16 rounded-full bg-accent-teal/25 blur-[2px] ${
            reverse ? "-right-2 top-4" : "-left-2 top-4"
          }`}
        />
        <span
          aria-hidden="true"
          className={`absolute -z-10 h-14 w-16 rounded-tl-full rounded-bl-full rounded-br-full bg-accent-orange ${
            reverse ? "-bottom-4 -left-4" : "-bottom-4 -right-4"
          }`}
        />
        <FeatureIllustration variant={variant} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -24 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        className="w-full max-w-md text-center md:w-1/2 md:text-left"
      >
        {eyebrow && (
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-brand">{eyebrow}</p>
        )}
        <h3 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{body}</p>
        <a
          href="#learn-more"
          className="focus-ring mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand hover:text-brand-dark"
        >
          Learn more about spellon
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </motion.div>
    </div>
  );
}

/* --------------------------------- quotes --------------------------------- */

function TestimonialCard({ name, handle, quote, index }) {
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length];
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay: (index % 3) * 0.08 }}
      className="rounded-2xl border border-ink/5 bg-white p-6 shadow-card"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
            style={{ backgroundColor: color }}
          >
            {name.charAt(0)}
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">{name}</p>
            <p className="text-xs text-ink-faint">{handle}</p>
          </div>
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DA1F2">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
        </svg>
      </div>
      <p className="text-[14px] leading-relaxed text-ink-soft">{quote}</p>
    </motion.article>
  );
}

/* ---------------------------------- main ---------------------------------- */

export default function Section() {
  return (
    <main>
      {/* Hero */}
      <section id="top" className="relative overflow-hidden pb-8 pt-14 sm:pt-20">
        <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-6xl">
              Grow up your sells
              <br />
              with us.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
              Build one project that runs natively on all your team now users' devices to
              turn for that you can do.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#try"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_-8px_rgba(53,86,245,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                Try for Free
              </a>
              <a
                href="#video"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-brand/25 bg-white px-6 py-3 text-sm font-semibold text-brand transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/50"
              >
                Discover in Video
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative mt-16 sm:mt-20"
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-[420px] max-w-3xl rounded-full bg-brand/10 blur-[90px]"
              aria-hidden="true"
            />
            <FloatingShapes />
            <DashboardMockup />
          </motion.div>
        </div>
      </section>

      {/* Logo strip */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">
          <p className="mb-8 text-center text-[13px] text-ink-faint">
            More than 1.8 million people across 10,000 companies choose Spellon
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
            {LOGOS.map((logo) => (
              <span
                key={logo}
                className="font-display text-base font-bold tracking-tight text-ink/60 sm:text-lg"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-surface-muted py-4 sm:py-8">
        <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto max-w-2xl pt-14 text-center sm:pt-20"
          >
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Award-winning logistics services.
              <br className="hidden sm:block" /> Powered by technology, delivered by experts.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
              Businesses are leaving money on the table every day due to missed supply chain
              opportunities. Zeropelt unlocks your potential with digital freight forwarding
              that drives cost savings and revenue improvements for your business.
            </p>
            <a
              href="#more"
              className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-[13px] font-semibold text-ink-soft hover:text-ink"
            >
              Explore Spellon store
            </a>
          </motion.div>

          <div className="divide-y divide-ink/5">
            {FEATURES.map((f) => (
              <FeatureRow key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-surface-muted py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto max-w-xl text-center"
          >
            <p className="text-[13px] font-semibold uppercase tracking-wide text-ink-faint">
              Over 2000 businesses, teams and companies are figured to grow their integration
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Don't just take our word for it
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} index={i} {...t} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}