import React from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchBar() {
  return (
    <div className="flex items-center bg-[#181818] rounded-lg px-4 h-10 w-full max-w-xl">
      <FiSearch className="text-gray-400 mr-2 text-lg" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent border-none outline-none text-white text-base w-full placeholder-gray-400"
      />
    </div>
  );
}

export default SearchBar; 