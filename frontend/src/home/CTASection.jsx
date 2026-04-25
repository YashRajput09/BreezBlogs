import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useReveal from "../hooks/Reveal";
import useCountUp from "../hooks/CountUp";
import {parseValue, formatValue} from "../utils/numberFormatter.js";
import { useAuth } from "../context/AuthProvider.jsx";

const stats = [
  { value: "48K+", label: "Published Blogs" },
  { value: "12K+", label: "Active Writers" },
  { value: "3.2M+", label: "Monthly Readers" },
  { value: "190+", label: "Countries Reached" },
];

function Stat({ value, label, delay }) {
  const { ref, visible } = useReveal(0.3);
  const { num, suffix } = parseValue(value);

  const count = useCountUp(num, 1500, visible);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s ease ${delay}ms`,
      }}
      className="text-center"
    >
      <h3 className="text-3xl md:text-5xl font-bold text-accent">{formatValue(count, suffix)}</h3>
      <p className="uppercase text-sm text-muted">{label}</p>
    </div>
  );
}

export default function CTASection() {
  const { ref, visible } = useReveal();
    const { isAuthenticated, profile } = useAuth();
    const navigate = useNavigate();

    const handleStartWriting = () => {
    if (isAuthenticated && profile.role === "admin") {
      navigate("/dashboard")
    } else {
      navigate("/login");
      toast.error("Only admin can create a blog");
    }
  }


  return (
    <section className="py-10 text-center">
        <h2 className="text-center text-sm text-gray-500 font-semibold tracking-widest">
      ✦ JOIN THE CREATORS ✦
      </h2>
       <h2 className="text-center text-3xl font-bold text-gray-600 mb-16">
       Start Your Writing Journey
      </h2>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:mx-20 mb-16">
      {/* <div className="flex justify-center md:gap-36 mb-16"> */}
        {stats.map((s, i) => (
          <Stat key={i} {...s} delay={i * 100} />
        ))}
      </div>

      {/* Headline */}
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease",
        }}
      >
        <h1 className="headline ">
          Your stories deserve <span className="highlight italic">to be heard.</span>
        </h1>

        <p className="mb-8 text-lg text-muted">
         BreezBlogs is where ideas find readers and writers find community. Start for free
         <p className="font-style"> — no credit card, no friction. Just write.</p>
        </p>

        <div className="flex gap-4 justify-center">
          <button 
          onClick={handleStartWriting}
          className="border-4 border-x-blue-400 px-16 py-2 rounded-full bg-black text-white">✦ Start Writing — with AI</button>
          {/* <button className="btn-secondary">Explore Blogs</button> */}
        </div>
      </div>
    </section>
  );
}
