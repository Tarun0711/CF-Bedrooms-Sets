import React from 'react'

function Arivallcard({ product }) {
  const {
    image,
    title,
    rating,
    reviews,
    price,
    originalPrice,
    discount,
    colors,
    stockStatus
  } = product;

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white relative flex flex-col">
      {/* Heart Icon */}
      <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75a5.25 5.25 0 00-4.5 2.472A5.25 5.25 0 007.5 3.75C4.667 3.75 2.25 6.167 2.25 9c0 7.25 9.75 11.25 9.75 11.25s9.75-4 9.75-11.25c0-2.833-2.417-5.25-5.25-5.25z" />
        </svg>
      </button>
      {/* Product Image */}
      <div className="bg-gray-100 h-auto flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="object-cover h-[380px] w-full"
        />
      </div>
      {/* Card Content */}
      <div className="p-5 bg-black text-white rounded-b-2xl flex flex-col gap-3">
        <h2 className="text-lg font-thin leading-tight">{title}</h2>
        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="bg-green-700 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            {rating} <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-3 h-3 inline"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
          </span>
          <span className="text-gray-300 text-sm">({reviews})</span>
        </div>
        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-white">₹ {price}</span>
          <span className="text-gray-400 line-through text-sm">₹ {originalPrice}</span>
          <span className="text-green-500 font-semibold text-sm">-{discount}% OFF</span>
        </div>
        {/* Color Options */}
        <div className="flex items-center gap-2 mt-2">
          {colors.map((color, index) => (
            <span 
              key={index}
              className={`w-7 h-7 rounded-full border-2 ${index === 0 ? 'border-green-600' : 'border-gray-300'} bg-[${color}] inline-block`}
            ></span>
          ))}
          {colors.length > 5 && (
            <span className="text-gray-300 ml-2 text-sm">+{colors.length - 5} more</span>
          )}
        </div>
        {/* Limited Stock Badge */}
        <div className="mt-4">
          <span className="text-gray-500 font-semibold px-5 py-2 rounded-full text-sm border border-gray-200">{stockStatus}</span>
        </div>
      </div>
    </div>
  )
}

export default Arivallcard