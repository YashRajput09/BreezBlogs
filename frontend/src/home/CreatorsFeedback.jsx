import useReveal from "../hooks/Reveal";
const testimonials = [
  {
    name: "Yash Rajput",
    quote: "BreezBlogs gave my words a home. Within two weeks of publishing, I had readers from five countries reaching out. I never expected that.",
    role: "Writer",
  },
  {
    name: "Vishal Patiar",
    quote: "I switched from three other platforms. The editor is clean, the audience is real, and the analytics actually make sense. This is where I stay.",
    role: "Developer Blogger",
  },
  {
    name: "Nivedita Deshmukh",
    quote: "My food blog went from 40 readers to 4,000 in three months. The lifestyle community here is incredibly supportive and engaged.",
    role: "Food Creator",
  },
];

function Card({ t, delay }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
      className="relative mt-12"
    >
      {/* Avatar (floating) */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
        <img
          className="w-20 h-20 rounded-full border-4 border-white shadow-md"
          src="https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
          alt=""
        />
      </div>

      {/* Card */}
      <div className="
        bg-white rounded-2xl p-8 pt-14 text-center
        shadow-[0_10px_30px_rgba(0,0,0,0.1)]
        border border-gray-100
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
        transition duration-300
      ">
        
        {/* Stars */}
        <div className="flex justify-center gap-1 text-yellow-400 mb-3">
          {"★★★★★".split("").map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>

        {/* Name */}
        <h4 className="font-semibold text-lg mb-2">
          {t.name}
        </h4>

        {/* Quote */}
        <p className="text-gray-600 text-sm leading-relaxed italic mb-4">
          “{t.quote}”
        </p>

        {/* Role */}
        <p className="text-xs text-gray-400">
          {t.role}
        </p>
      </div>
    </div>
  );
}

export default function CreatorsFeedback() {
  return (
    <section className="py-10">
       <h2 className="text-center text-sm text-gray-500 font-semibold tracking-widest">
      ✦ SOCIAL PROOF ✦
      </h2>
      <h2 className="text-center text-3xl font-bold text-gray-600 mb-12">
        What creators say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mx-6 md:mx-10 items-start">
        {testimonials.map((t, i) => (
  <div
    key={i}
    className={`
      ${i === 1 ? "md:mt-12" : "md:mt-0"}
    `}
  >
    <Card t={t} delay={i * 120} />
  </div>
))}
      </div>
    </section>
  );
}