import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navebar from './componentes/Navebar';
import Footer from './componentes/Footer';
const Home = lazy(() => import('./componentes/Home'));
const Blogs = lazy(() => import('./pages/Blogs'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Creators = lazy(() => import('./pages/Creators'));
const CreatorProfie = lazy(() => import('./pages/CreatorProfile'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const UpdateBlog = lazy(() => import('./dashboard/UpdateBlog'));
const ViewBlog = lazy(() => import('./pages/ViewBlog'));
const UpdateAdminProfile = lazy(() => import('./dashboard/updateAdminProfile'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
import PageNotFound from './pages/PageNotFound';
import { Toaster } from 'react-hot-toast';
import SearchBlogs from './pages/SearchBlogs';
import ScrollToTopOnRouteChange from './componentes/Scroll/ScrollToTopOnRouteChange';
import FScrollToTopButton from './componentes/Scroll/ScrollToTopButton';
import SkeletonLoader from './loaders/SkeletonLoader';
// import FollowerModal from './componentes/Profile/FollowersList';

function App() {
  const location = useLocation();
  const hidePages = ["/login", "/signup", "/dashboard"].includes(
    location.pathname
  );
  
  return (
    <>
      {/* <div className=""> */}
      <div className="pt-28 md:pt-20">
       {!hidePages && <Navebar/>}
       <ScrollToTopOnRouteChange/>
       <Suspense fallback={<SkeletonLoader/>}>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/creators" element={<Creators/>}/>
        <Route path="/creator/profile/:id" element={<CreatorProfie/>}/>
        {/* <Route path="/creator/profile/:id/followers" element={<FollowerModal/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/blog/update/:id" element={<UpdateBlog/>}/>
        <Route path="/blog/view/:id" element={<ViewBlog/>}/>
        <Route path="/user/update/admin/profile/:id" element={<UpdateAdminProfile/>}/>
        <Route path="/user/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/user/resetpassword" element={<ResetPassword/>}/>
        <Route path="/api/search" element={<SearchBlogs/>}/>
        <Route path='*' element={<PageNotFound/>}/>
       </Routes>
       </Suspense>
       <Toaster />
       <FScrollToTopButton />
       {!hidePages && <Footer/>}
      </div>
    </>
  )
}

export default App;