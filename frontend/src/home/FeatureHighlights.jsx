import useReveal from "../hooks/Reveal";

const features = [
  {
    title: "Powerful Editor",
    desc: "Write distraction-free with a modern editor built for focus. Markdown, rich text, embeds — everything where you need it.",
  },
  {
    title: "Real Audience",
    desc: "Reach readers who actually care. Our discovery engine surfaces your work to people already searching for your niche.",
  },
  {
    title: "Clear Analytics",
    desc: "Understand your growth with honest, jargon-free dashboards. Know which posts land and double down on what works.",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="py-10">
      <h2 className="text-center text-sm text-gray-500 font-semibold tracking-widest">
      ✦ PLATEFROM FEATURES ✦
      </h2>
      <h2 className="text-center text-3xl font-bold text-gray-600 mb-12">
        Why creators love BreezBlogs
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mx-10 border shadow-sm">
        {features.map((f, i) => {
          const { ref, visible } = useReveal();

          return (
            <div
              key={i}
              ref={ref}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 120}ms`,
              }}
              className="p-6 rounded-xl bg-card"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}