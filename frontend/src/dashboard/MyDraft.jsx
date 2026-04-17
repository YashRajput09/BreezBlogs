// pages/MyDrafts.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const MyDrafts = () => {
  const [drafts, setDrafts] = useState([]);

  const fetchDrafts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND_URL}/user/dashboard/my-drafts/blog`,
        { withCredentials: true }
      );
      setDrafts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDrafts();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 md:ml-60">
      <div className="max-w-7xl mx-auto px-5 py-2">

        {/* Header */}
        <div className="mb-8">
          {drafts.length > 0 && (
            <p className="mt-1 text-sm text-gray-500">
              {drafts.length} draft{drafts.length !== 1 ? "s" : ""} saved
            </p>
          )}
        </div>

        {/* Empty State */}
        {drafts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-700 mb-1">No drafts yet</h3>
            <p className="text-sm text-gray-400">Start writing and save as a draft to see it here.</p>
          </div>
        ) : (
          /* Draft Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {drafts.map((blog) => (
              <div
                key={blog._id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-md transition-all duration-200 flex flex-col"
              >
                {/* Cover Image */}
                {blog.blogImage ? (
                  <div className="relative w-full h-44 overflow-hidden bg-gray-100 shrink-0">
                    <img
                      src={blog.blogImage.url}
                      alt={blog.title || "Draft cover"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest uppercase bg-white/90 text-gray-600 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      Draft
                    </span>
                  </div>
                ) : (
                  /* Placeholder when no image */
                  <div className="relative w-full h-44 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center shrink-0">
                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest uppercase bg-white/90 text-gray-600 px-2.5 py-1 rounded-full">
                      Draft
                    </span>
                  </div>
                )}

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-4">
                  {/* Category */}
                  {blog.category && (
                    <span className="inline-block self-start text-[10px] font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full mb-2">
                      {blog.category}
                    </span>
                  )}

                  {/* Title */}
                  <h2 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 mb-auto">
                    {blog.title || "Untitled Draft"}
                  </h2>

                  {/* Footer */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 min-w-0">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span className="truncate">{formatDate(blog.createdAt)}</span>
                    </div>

                    <button
                      onClick={() => (window.location.href = `/blog/update/${blog._id}`)}
                      className="shrink-0 flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Edit
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDrafts;