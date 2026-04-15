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

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Drafts</h1>

      {drafts.length === 0 ? (
        <p>No drafts found.</p>
      ) : (
        <div className="grid gap-4">
          {drafts.map((blog) => (
            <div
              key={blog._id}
              className="border rounded-lg p-4 shadow hover:shadow-md"
            >
              <h2 className="font-semibold text-lg">{blog.title || "Untitled Draft"}</h2>
              <p className="text-sm text-gray-500">{blog.category}</p>
              <p className="text-xs text-gray-400">
                Last updated: {new Date(blog.updatedAt).toLocaleString()}
              </p>

              <button
                onClick={() =>
                  (window.location.href = `/edit-blog/${blog._id}`)
                }
                className="mt-2 text-blue-600 hover:underline"
              >
                Continue Editing →
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDrafts;