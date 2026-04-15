import React, {useState} from "react";
import SideBar from "../dashboard/SideBar.jsx";
import MyProfile from "../dashboard/MyProfile.jsx";
import CreateBlog from "../dashboard/CreateBlog.jsx";
import MyBlogs from "../dashboard/MyBlogs.jsx";
import BlogsAnalysis from "../dashboard/Analysis/BlogsAnalysis.jsx"
import { useAuth } from "../context/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";
import MyDrafts from "../dashboard/MyDraft.jsx";

 const Dashboard = () => {
  const [component, setComponent] = useState("My Blogs");
  const navigate = useNavigate()

  const {isAuthenticated} = useAuth();
  // console.log(isAuthenticated);
  
  //check user is LoggedIn
  if(!isAuthenticated){ 
    navigate('/')
  }

  return( 
    <div>
     <SideBar component={component} setComponent={setComponent}/>
    {
      component === "My Profile" ? (
        <MyProfile/>
      ) : component === "Create Blog" ? (
        <CreateBlog/>
      ) : component === "Draft Blogs" ? (
        <MyDrafts/>
      ) : component === "Blogs Analysis" ? (
        <BlogsAnalysis/>
      ) : (
         // Pass setComponent to MyBlogs
        <MyBlogs setComponent={setComponent}/>
      )
    }
    </div>
)
};

export default Dashboard;
