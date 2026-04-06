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
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${delay}ms`,
      }}
      className="p-6 bg-card rounded-xl border-2"
    >
      <p className="italic mb-4">"{t.quote}"</p>
      <div className="flex gap-3">
      <img className="w-12 h-12 rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/036/594/092/small_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg" alt="" />
      <div className="">
      <h4 className="font-semibold">{t.name}</h4>
      <p className="text-sm text-muted">{t.role}</p>
      </div>
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

      <div className="grid md:grid-cols-3 gap-6 mx-10 ">
        {testimonials.map((t, i) => (
          <Card key={i} t={t} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}