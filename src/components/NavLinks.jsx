import React from 'react';

const links = ['BEDS', 'WARDROBES', 'NIGHTSTANDS', 'DRESSER', 'MIRROR'];

function NavLinks() {
  return (
    <nav className="flex justify-around gap-12 w-full">
      {links.map(link => (
        <span
          key={link}
          className="text-white text-base tracking-wide cursor-pointer hover:text-yellow-300 transition"
        >
          {link}
        </span>
      ))}
    </nav>
  );
}

export default NavLinks; 