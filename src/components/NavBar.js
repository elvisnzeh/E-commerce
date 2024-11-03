import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes, FaUser, FaShopify } from "react-icons/fa";
import { Link } from 'react-router-dom';

function NavBar() {
  const [toggle, SetToggle] = useState(false);

  const tog = () => {
    SetToggle(!toggle);
  };

  const NavItem = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Apparel", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Art & Collectibles", path: "/" },
    { title: "Craft Supplies", path: "/" },
    { title: "Gifts & Gift Cards", path: "/" },
  ];

  return (
    <div>
      <header className='max-w-screen-2xl xl:px-28 px-4'>
        <nav className='flex justify-between items-center md:py-4 pt-6 pb-3'>
          {/* Left section: Search icon and Home link */}
          <div className='flex items-center gap-2'>
            <a href="/" className='flex items-center'>
              <CiSearch className="mr-2 text-black w-5 h-5 cursor-pointer hidden md:block" /> {/* Search icon */}
            </a>
          </div>

          {/* Center section: Logo */}
          <div className='flex justify-center flex-grow'>
            <a href="/">
              <img src="/small.jpg" alt="Logo" className="w-16 h-16 object-contain" />
            </a>
          </div>

          {/* Right section: Account and Shopping icons */}
          <div className='text-lg text-black sm:flex items-center gap-4 hidden'>
            <a href='/' className="flex items-center gap-2">
              <FaUser />Account
            </a>
            <a href='/' className="flex items-center gap-2">
              <FaShopify />Shopping
            </a>
          </div>

          {/* Toggle button for mobile */}
          <div>
            <button onClick={tog}>
              {toggle ? <FaTimes className='w-5 h-5 text-black md:hidden' /> : <FaBars className='w-5 h-5 text-black md:hidden' />}
            </button>
          </div>
        </nav>
        <hr />

        {/* Desktop Navigation */}
        <div className='pt-4'>
          <ul className='lg:flex items-center justify-between text-black hidden'>
            {NavItem.map(({ title, path }) => (
              <li key={title} className='hover:text-orange-50'>
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className={`${toggle ? 'block' : 'hidden'} bg-black text-white px-4 py-2 md:hidden`}>
          <ul>
            {NavItem.map(({ title, path }) => (
              <li key={title} className='hover:text-orange-50 my-3'>
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
