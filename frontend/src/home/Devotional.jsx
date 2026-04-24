import React from 'react';
import { useAuth } from '../context/AuthProvider.jsx';
import { Link } from 'react-router-dom';

const Devotional = () => {
  const { blogs } = useAuth();

  if (!blogs || blogs.length === 0) return null;

  const devotionalBlogs = blogs.filter((blog) => blog.category?.[0] === 'Devotional');

  if (devotionalBlogs.length === 0) return null;

  return (
    <section className="px-4 md:px-10 py-6">

      {/* Section label */}
      <span className="inline-block text-[11px] font-medium uppercase tracking-widest text-slate-500 border-t-2 border-slate-900 dark:border-slate-100 pt-2 mb-1">
        Devotional
      </span>

      <p className="text-xs italic text-slate-400 dark:text-slate-500 mb-5">
        The concept of god varies widely across different cultures, religions and belief systems.
      </p>

      {/* Portrait tile grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
        {devotionalBlogs.map(({ _id, blogImage, title }) => (
          <Link
            to={`/blog/view/${_id}`}
            key={_id}
            className="group relative aspect-[3/4] rounded-lg overflow-hidden no-underline block"
          >
            <img
              src={blogImage.url}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay — always visible, deepens on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-medium leading-tight">
              {title}
            </span>
          </Link>
        ))}
      </div>

      {/* View all */}
      <div className="mt-4">
        <Link
          to="/blogs?category=Devotional"
          className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline underline-offset-4"
        >
          View all devotional →
        </Link>
      </div>
    </section>
  );
};

export default Devotional;