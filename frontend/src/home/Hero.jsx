import React from 'react';
import { useAuth } from '../context/AuthProvider.jsx';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { blogs } = useAuth();

  console.log("Hero:", blogs);

  if (!blogs || blogs.length === 0) return <div />;

  return (
    <div className="md:mx-10 px-7">
      <span className="inline-block text font-medium uppercase tracking-widest text-slate-500 border-t-2 border-slate-900 dark:border-slate-100 pt-2 mb-1">
        Daily Blogs
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        {blogs.slice(0, 4).map((blog) => (
          <Link
            to={`/blog/view/${blog._id}`}
            key={blog._id}
            className="shadow-xl rounded-lg overflow-hidden transform hover:scale-105 duration-300 transition-transform"
          >
            <div className="group relative">
              <img
                src={blog.blogImage?.url}
                className="w-full h-56 object-cover"
                alt="Blog"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-25 group-hover:opacity-75 transition-transform duration-300"></div>

              <h1 className="absolute bottom-4 text-white tracking-tight left-4 md:text-xl font-semibold group-hover:text-gray-300 duration-300 group-hover:tracking-wider">
                {blog.title}
              </h1>
            </div>

            <div className="flex gap-4 p-5">
              <img
                src={
                  blog.createdBy?.profileImage?.url ||
                  blog.adminImage ||
                  "/default-avatar.png"
                }
                className="w-12 h-12 rounded-full border-2 border-blue-400"
                alt="Admin"
              />

              <div>
                <p className="font-semibold uppercase text-lg">
                  {blog.createdBy?.name ||
                    blog.adminName ||
                    "Unknown"}
                </p>

                <p className="text-xs text-gray-400">
                  Rajput
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;