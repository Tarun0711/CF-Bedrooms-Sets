import React from 'react';
import { FiUser, FiShoppingCart, FiHeart, FiMoreVertical } from 'react-icons/fi';

function Badge({ count }) {
  return (
    <span className="bg-[#F5D7A1] text-[#222] rounded-full px-2 text-xs font-bold absolute -top-2 -right-2">
      {count}
    </span>
  );
}

function UserActions() {
  return (
    <div className="flex items-center gap-7 text-white text-base">
      <span className="flex items-center cursor-pointer">
        <FiUser className="text-lg mr-1" /> Login
      </span>
      <span className="relative flex items-center cursor-pointer">
        <FiShoppingCart className="text-lg mr-1" /> Cart
        <Badge count={3} />
      </span>
      <span className="relative flex items-center cursor-pointer">
        <FiHeart className="text-lg mr-1" /> Wishlist
        <Badge count={12} />
      </span>
      <span className="text-2xl cursor-pointer">
        <FiMoreVertical />
      </span>
    </div>
  );
}

export default UserActions; 