import React, { lazy, Suspense, useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";

const SideBar = lazy(() => import("../dashboard/SideBar.jsx"));
const MyProfile = lazy(() => import("../dashboard/MyProfile.jsx"));
const CreateBlog = lazy(() => import("../dashboard/CreateBlog.jsx"));
const MyBlogs = lazy(() => import("../dashboard/MyBlogs.jsx"));
const BlogsAnalysis = lazy(() => import("../dashboard/Analysis/BlogsAnalysis.jsx"));
const MyDrafts = lazy(() => import("../dashboard/MyDraft.jsx"));

const Dashboard = () => {
  const [component, setComponent] = useState("My Blogs");
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div>
      <Suspense fallback={<div>Loading Sidebar...</div>}>
        <SideBar component={component} setComponent={setComponent} />
      </Suspense>

      <Suspense fallback={<div className="p-6">Loading...</div>}>
        {component === "My Profile" ? (
          <MyProfile />
        ) : component === "Create Blog" ? (
          <CreateBlog />
        ) : component === "Draft Blogs" ? (
          <MyDrafts />
        ) : component === "Blogs Analysis" ? (
          <BlogsAnalysis />
        ) : (
          <MyBlogs setComponent={setComponent} />
        )}
      </Suspense>
    </div>
  );
};

export default Dashboard;