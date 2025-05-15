import React from 'react';

function Card({ image, label, onClick, size = 'small' }) {
  const dimensions = {
    small: { width: '150px', height: '120px' },
    large: { width: '200px', height: '160px' }
  };

  const { width, height } = dimensions[size];

  return (
    <div 
      onClick={onClick} 
      className="cursor-pointer text-center mx-4 transition-transform duration-300 hover:scale-110"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img 
          src={image} 
          alt={label} 
          className="object-cover"
          style={{ width, height }}
        />
      </div>
      <div className="text-[#ccc] text-sm hover:text-white mt-1">{label}</div>
    </div>
  );
}

export default Card; 