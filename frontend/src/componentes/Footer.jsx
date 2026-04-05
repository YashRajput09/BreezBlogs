import React from 'react';
import {Link} from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { CgInfinity } from "react-icons/cg";


const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/YashRajput09", icon: <FaGithub className="w-6 h-6" aria-label="Github" /> },
    { href: "#", icon: <BsYoutube className="w-6 h-6" aria-label="YouTube" /> },
    { href: "https://www.linkedin.com/in/yashvardhan-rajput-134305276/", icon: <FaLinkedin className="w-6 h-6" aria-label="LinkedIn" /> },
  ];

  return (
    // <footer className='relative mt-20 overflow-hidden'>
    <footer className='relative mt-20 overflow-hidden'>
      {/* <div className="border-y-2 px-5 md:px-16"> */}

        {/* 🌊 Background SVG */}
  <div className="absolute top-0 left-0 w-full h-full -z-10">
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#273036"
        fillOpacity="0.2"
        d="M0,0L40,32C80,64,160,128,240,128C320,128,400,64,480,80C560,96,640,192,720,208C800,224,880,160,960,149.3C1040,139,1120,181,1200,181.3C1280,181,1360,139,1400,117.3L1440,96L1440,320L0,320Z"
      />
    </svg>
  </div>
      <div className="border-y-2 px-5 md:px-16">

        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-44 py-10'>
          {["COMPANY", "HELP CENTER", "LEGAL"].map((section, idx) => (
            <ul key={idx} className='text-sm space-y-2'>
              <li className='font-semibold text-base text-gray-700'>{section}</li>
              {section === "COMPANY" && (
                <>
                  <li><a href="/about" className="text-gray-500 hover:text-gray-700">About</a></li>
                  <li><a href="/careers" className="text-gray-500 hover:text-gray-700">Careers</a></li>
                  <li><a href="blogs" className="text-gray-500 hover:text-gray-700">Blog</a></li>
                </>
              )}
              {section === "HELP CENTER" && (
                <>
                  <li><a href="#" className="text-gray-500 hover:text-gray-700">Discord Server</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-gray-700">Twitter</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-gray-700">Facebook</a></li>
                  <li><a href="/contact" className="text-gray-500 hover:text-gray-700">Contact Us</a></li>
                </>
              )}
              {section === "LEGAL" && (
                <>
                  <li><a href="#" className="text-gray-500 hover:text-gray-700">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-gray-700">Licensing</a></li>
                  <li><a href="#" className="text-gray-500 hover:text-gray-700">Terms & Conditions</a></li>
                </>
              )}
              
            </ul>
          ))}
        </div>
      </div>

      <div className='flex w-full justify-around py-5'>
        <Link to={'/'} className="flex font-semibold text-blue-500 text-xl gap-1">
        <CgInfinity className="text-3xl" /> 
        BreezBlogs</Link>
        <div className="hidden md:block text-gray-400 text-sm">
          <p>&copy; 2026 BreezBlogs PVT. LTD. All rights reserved</p>
        </div>
        <div className="flex space-x-6">
          {socialLinks.map((link, idx) => (
            <a key={idx} href={link.href}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
