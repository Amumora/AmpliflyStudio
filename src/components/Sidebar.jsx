import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiHome, HiPhotograph, HiUserGroup, HiHashtag, HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FaSignOutAlt } from "react-icons/fa";



const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Discover', to: "/Login/Discover", icon: <HiHome className="w-6 h-6" /> },
    { name: 'Around You', to: '/around-you', icon: <HiPhotograph className="w-6 h-6" /> },
    { name: 'Top Artists', to: '/top-artists', icon: <HiUserGroup className="w-6 h-6" /> },
    { name: 'Top Charts', to: '/top-charts', icon: <HiHashtag className="w-6 h-6" /> },
    { name: 'Logout', to: '/Login', icon: <FaSignOutAlt className="w-6 h-6"/> },
  ];



  const NavLinks = ({  setNavi }) => (
    <div className="mt-4">
      {links.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className="flex items-center py-2 text-sm font-medium text-gray-300 hover:text-cyan-500 transition-all duration-300"
          onClick={() => {
            if (item.name === 'Logout') {
              setNavi(false);
            }
          }}
        >
          {item.icon}
          <span className="ml-2">{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-6 px-4 bg-gradient-to-r from-blue-900 via-red-900 to-gray-800 rounded-md">
        <div className="flex justify-center items-center mb-4">
          <img src="https://picsum.photos/200/300" alt="logo" className="w-16 h-16 rounded-full" />
        </div>
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-6 h-6 text-white" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <HiOutlineX className="w-6 h-6 text-white" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tr from-blue-900 via-red-900 to-gray-800 backdrop-blur-lg z-10 p-6 md:hidden transition-transform ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <div className="flex justify-center items-center mb-4">
          <img src="https://picsum.photos/200/300" alt="logo" className="w-16 h-16 rounded-full" />
        </div>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};



export default Sidebar;
