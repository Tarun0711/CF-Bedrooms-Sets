import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';
import UserActions from './UserActions';

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`bg-[#111] w-full ${isFixed ? 'fixed top-0 left-0 z-50' : ''}`}>
      <div className="flex items-center justify-between px-8 py-2">
        <div className="flex items-center gap-6">
          <Logo />
        </div>
        <div className="flex-1 mx-8">
          <SearchBar />
        </div>
        <UserActions />
      </div>
      <div className="border-t border-b border-[#222] py-3 mt-1">
        <NavLinks />
      </div>
    </div>
  );
}

export default Navbar;