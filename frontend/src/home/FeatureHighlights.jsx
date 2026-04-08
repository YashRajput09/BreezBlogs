import { useState, useEffect, useRef } from "react";

const steps = [
  {
    label: "Write",
    tag: "Powerful Editor",
    heading: "Write without distraction",
    desc: "A clean, focused editor built for writers. Markdown, rich text, and embeds — everything lives exactly where you need it, nothing you don't.",
    stats: [
      { n: "2×", l: "Faster writing" },
      { n: "99%", l: "Uptime" },
      { n: "0", l: "Clutter" },
    ],
    cards: [
      { title: "Markdown support", pct: 100 },
      { title: "Rich text & embeds", pct: 90 },
      { title: "AI writing assist", pct: 75 },
    ],
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    label: "Discover",
    tag: "Real Audience",
    heading: "Get found by the right readers",
    desc: "Our discovery engine surfaces your work to people already searching your niche. No follower grind. Just great writing and a matched audience.",
    stats: [
      { n: "3.2M+", l: "Monthly readers" },
      { n: "190+", l: "Countries" },
      { n: "48K+", l: "Blogs live" },
    ],
    cards: [
      { title: "Niche matching", pct: 95 },
      { title: "Search visibility", pct: 85 },
      { title: "Reader retention", pct: 80 },
    ],
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    label: "Grow",
    tag: "Community",
    heading: "Find your people",
    desc: "12,000+ active writers sharing feedback, collaborating on ideas, and cheering each other on. The loneliest part of writing — handled.",
    stats: [
      { n: "12K+", l: "Writers active" },
      { n: "4.8★", l: "Community rating" },
      { n: "Daily", l: "Events" },
    ],
    cards: [
      { title: "Writer network", pct: 92 },
      { title: "Feedback circles", pct: 78 },
      { title: "Collaboration tools", pct: 70 },
    ],
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Earn",
    tag: "Clear Analytics",
    heading: "Grow what actually works",
    desc: "Honest, jargon-free dashboards show you exactly which posts land. Double down on what works, drop what doesn't. No data science degree required.",
    stats: [
      { n: "Real-time", l: "Stats updates" },
      { n: "7", l: "Key metrics" },
      { n: "100%", l: "Transparent" },
    ],
    cards: [
      { title: "Post performance", pct: 100 },
      { title: "Audience insights", pct: 88 },
      { title: "Growth trends", pct: 82 },
    ],
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
];

function MiniCard({ title, pct, animate }) {
  return (
    <div
      className="bg-white border border-[#e2e8f0] rounded-[12px] px-4 py-3.5 transition-[transform,border-color] duration-200"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateX(4px)";
        e.currentTarget.style.borderColor = "#93c5fd";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.borderColor = "#e2e8f0";
      }}
    >
      <div
        className="flex items-center gap-2 mb-2"
      >
        <div
          className="w-2 h-2 rounded-full bg-[#2563eb] shrink-0"
        />
        <span style={{ fontSize: 12, fontWeight: 700, color: "#0f172a" }}>
          {title}
        </span>
      </div>
      <div
        className="h-1 bg-slate-100 rounded-full overflow-hidden"
      >
        <div 
  className="h-full rounded bg-[#2563eb] transition-[width] duration-[800ms] delay-[200ms] ease-in-out"
  style={{ width: animate ? `${pct}%` : "0%" }}
/>
      </div>
    </div>
  );
}

export default function FeatureHighlights() {
  const [current, setCurrent] = useState(0);
  const [animateBars, setAnimateBars] = useState(true);
  const timerRef = useRef(null);

  const connectorPct = [0, 33, 66, 100][current];

  const goTo = (i) => {
    clearTimeout(timerRef.current);
    if (i === current) return;
    setAnimateBars(false);
    setTimeout(() => {
      setCurrent(i);
      setAnimateBars(true);
    }, 50);
    timerRef.current = setTimeout(() => goTo((i + 1) % 4), 4000);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => goTo(1), 4000);
    return () => clearTimeout(timerRef.current);
  }, []);

  const d = steps[current];

  return (
    <section
      className="pt-14 px-6 pb-16 font-['Plus_Jakarta_Sans',_sans-serif]"
    >
      {/* Add font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-[860px] mx-auto">
        {/* Header */}
        <h2 className="text-center text-sm text-gray-500 font-semibold tracking-widest">
          ✦ PLATEFROM FEATURES ✦
        </h2>
        <h2 className="text-center text-3xl font-bold text-gray-600 mb-14">
          Why creators love BreezBlogs
        </h2>
        <p
          className="text-center text-[14px] text-[#64748b] mb-8"
        >
          Tap each step to explore your writing journey
        </p>

        {/* Step row */}
        <div style={{ position: "relative", marginBottom: 0 }}>
          {/* Connector track */}
          <div class="absolute top-[36px] left-[calc(12.5%+36px)] right-[calc(12.5%+36px)] h-[2px] bg-[#e2e8f0] z-0">
            <div
              className="h-full bg-[#2563eb] transition-[width] duration-500 ease-in-out rounded-[2px]"
              style={{ width: `${connectorPct}%` }}
            />
          </div>

          {/* <div style={{ display: "flex", position: "relative", zIndex: 1 }}> */}
          <div className="flex relative z-10">
            {steps.map((s, i) => {
              const isActive = i === current;
              const isDone = i < current;
              return (
                <div
                  key={i}
                  onClick={() => goTo(i)}
                  className="flex-1 flex flex-col items-center cursor-pointer"
                >
                  <div
                    className={`
    w-[62px] h-[62px] rounded-full flex items-center justify-center relative mb-3
    transition-all duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)]
    ${isActive ? "bg-[#2563eb] border-[#2563eb] scale-[1.09] text-white" : "bg-white text-[#2563eb]"}
    ${isDone && !isActive ? "border-[#2563eb]" : "border-[#e2e8f0]"}
    border-2
  `}
                  >
                    {s.icon}
                    {(isActive || isDone) && (
                      <div
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#2563eb] text-white text-[10px] font-extrabold flex items-center justify-center"
                      >
                        {i + 1}
                      </div>
                    )}
                  </div>
                  <span
                   className={`
  text-[12px] font-bold tracking-wider uppercase transition-colors duration-200
  ${isActive || isDone ? "text-[#2563eb]" : "text-[#94a3b8]"}
`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail box */}
        <div
          className="mt-8 bg-white rounded-[20px] border-[1.5px] border-[#e2e8f0] overflow-auto"
        >
          <div className="flex min-h-[200px]">
            {/* Left */}
            <div
              className="flex-1 p-8 pl-9 border-r border-[#f1f5f9]"
            >
              <span
                className="inline-block bg-[#eff6ff] text-[#1d4ed8] text-[11px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-[20px] mb-[14px]"
              >
                {d.tag}
              </span>
              <h3
                className="text-[22px] font-extrabold text-[#0f172a] mb-2.5 tracking-[-0.02em]"
              >
                {d.heading}
              </h3>
              <p
             className="text-[14px] text-[#64748b] leading-[1.75] mb-5"
              >
                {d.desc}
              </p>
              <div className="flex gap-6">
                {d.stats.map((s, i) => (
                  <div
                    key={i}
                    className="flex flex-col"
                  >
                    <span
                     className="text-[22px] font-extrabold text-[#2563eb]"
                    >
                      {s.n}
                    </span>
                    <span
                      className="text-[11px] text-[#94a3b8] font-semibold uppercase tracking-[0.05em]"
                    >
                      {s.l}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div
              className="w-[260px] p-6 flex flex-col gap-3 justify-center bg-[#fafbff]"
            >
              {d.cards.map((c, i) => (
                <MiniCard
                  key={`${current}-${i}`}
                  title={c.title}
                  pct={c.pct}
                  animate={animateBars}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Nav dots */}
        <div
          className="flex gap-2 justify-center mt-7"
        >
          {steps.map((_, i) => (
            <div
              key={i}
              onClick={() => goTo(i)}
              className={`
  h-2 rounded-full cursor-pointer transition-all duration-200
  ${i === current ? "bg-[#2563eb] w-6" : "bg-[#e2e8f0] w-2"}
`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
