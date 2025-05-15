import React from 'react';

const roomImage = 'https://img.freepik.com/premium-photo/stylish-minimalist-bedroom-black-modern-luxurious-oppulent-modern-luxe-modernbaroque-design-ideas_771426-12671.jpg'; // placeholder
const productImages = [
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
];
const productNames = [
  'Elegant Wardrobe',
  'Elegant Wardrobe',
  'Elegant Dressing Table',
  'Sleek Modern Bedside Table',
  'Portable Study Table',
  'Portable Study Table',
  'Adjustable Side Console',
  'Microwave Bed with cushions',
];

function ShopBySets() {
  return (
    <>
    <div className="w-full flex justify-center mt-12 mb-2">
      <h2 className="text-[1.4rem] font-serif" style={{ color: '#E5CBA3', fontWeight: 400 }}>
        <span className="italic  font-serif">shop by</span> <span className="font-normal">SETS</span>
      </h2>
    </div>
    <div className='flex mx-auto text-center'> </div>
    <div className="bg-[#232323] rounded-lg text-white px-0 py-0 flex flex-col max-w-[90%] mx-auto font-serif">

      {/* Top Bar */}
      <div className="flex justify-end items-center px-12 py-6">
        <div className="mr-auto text-lg text-[#fffcf7] font-semibold">Modern Rustic Bedroom</div>
        <p className='text-lg text-gray-400 px-4'>8 item selected</p>
        <div className="text-2xl font-bold text-yellow-200 mr-4">₹1,29,999</div>
        <div className="text-lg line-through text-gray-400 mr-4">₹1,75,999</div>
        <div className="text-lg text-green-500 font-semibold mr-6">You Save: ₹45,000</div>
        <button className="bg-[#e5cba3] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#d1b07a] transition">Get This Set Now</button>
      </div>
      {/* Main Content */}
      <div className="flex flex-1 gap-8 px-12 pb-8">
        {/* Left: Room Image and Info */}
        <div className="flex flex-col w-2/5">
            <img src={roomImage} alt="Modern Rustic Bedroom" className="w-full rounded-lg object-cover h-[420px]" />
            
          
        </div>
        {/* Right: Product Cards */}
        <div className="flex-1 flex flex-col">
          <div className="flex justify-start gap-4">
            {productImages.slice(0,4).map((img, i) => (
              <div key={i} className=" rounded-xl overflow-hidden flex flex-col items-center p-2">
                <img src={img} alt={productNames[i]} className="w-40 h-28 object-cover rounded-lg mb-2" />
                <div className="text-center text-sm text-gray-200 font-medium mb-2">{productNames[i]}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-start gap-4">
            {productImages.slice(4).map((img, i) => (
              <div key={i} className=" rounded-xl overflow-hidden flex flex-col items-center p-2">
                <img src={img} alt={productNames[i+4]} className="w-40 h-28 object-cover rounded-lg mb-2" />
                <div className="text-center text-sm text-gray-200 font-medium mb-2">{productNames[i+4]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
}

export default ShopBySets;