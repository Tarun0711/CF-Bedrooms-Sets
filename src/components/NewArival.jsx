import React from 'react'
import Arivallcard from './Arivallcard'

function NewArival() {
    const newArrivals = [
        {
            image: "https://img.freepik.com/premium-photo/stylish-minimalist-bedroom-black-modern-luxurious-oppulent-modern-luxe-modernbaroque-design-ideas_771426-12671.jpg",
            title: "Zenith Metal Frame Bed with Headboard and Footboard (Full Size, Black)",
            rating: 4.6,
            reviews: 4200,
            price: 26999,
            originalPrice: 29999,
            discount: 10,
            colors: ["black", "gray-200", "white", "gray-100", "#5a4a3f"],
            stockStatus: "LIMITED STOCK"
        },
        {
            image: "https://img.freepik.com/premium-photo/modern-living-room-interior-design-with-sofa-table_41470-2378.jpg",
            title: "Modern L-Shaped Sofa Set with Ottoman (Gray)",
            rating: 4.8,
            reviews: 3150,
            price: 45999,
            originalPrice: 52999,
            discount: 15,
            colors: ["gray-400", "gray-600", "gray-800"],
            stockStatus: "IN STOCK"
        },
        {
            image: "https://img.freepik.com/premium-photo/modern-dining-room-interior-design-with-table-chairs_41470-2379.jpg",
            title: "Contemporary Dining Table Set with 6 Chairs",
            rating: 4.5,
            reviews: 2800,
            price: 34999,
            originalPrice: 39999,
            discount: 12,
            colors: ["#8B4513", "#D2691E", "#CD853F"],
            stockStatus: "LIMITED STOCK"
        },
        {
            image: "https://img.freepik.com/premium-photo/modern-kitchen-interior-design-with-cabinets_41470-2380.jpg",
            title: "Smart Kitchen Cabinet Set with LED Lighting",
            rating: 4.7,
            reviews: 1950,
            price: 89999,
            originalPrice: 99999,
            discount: 10,
            colors: ["white", "gray-100", "gray-200"],
            stockStatus: "IN STOCK"
        }
    ];

    const topSellers = [
        {
            image: "https://img.freepik.com/premium-photo/modern-living-room-interior-design-with-armchair_41470-2381.jpg",
            title: "Ergonomic Office Chair with Adjustable Height",
            rating: 4.9,
            reviews: 5600,
            price: 15999,
            originalPrice: 18999,
            discount: 15,
            colors: ["black", "gray-600", "gray-800","black", "gray-600", "gray-800"],
            stockStatus: "BESTSELLER"
        },
        {
            image: "https://img.freepik.com/premium-photo/modern-living-room-interior-design-with-coffee-table_41470-2382.jpg",
            title: "Glass Top Coffee Table with Storage",
            rating: 4.7,
            reviews: 3200,
            price: 12999,
            originalPrice: 14999,
            discount: 13,
            colors: ["#2F4F4F", "#696969", "#808080"],
            stockStatus: "IN STOCK"
        },
        {
            image: "https://img.freepik.com/premium-photo/modern-living-room-interior-design-with-tv-unit_41470-2383.jpg",
            title: "Wall-Mounted TV Unit with LED Backlight",
            rating: 4.6,
            reviews: 2800,
            price: 24999,
            originalPrice: 27999,
            discount: 10,
            colors: ["#000000", "#1C1C1C", "#363636","#000000", "#1C1C1C", "#363636"],
            stockStatus: "BESTSELLER"
        },
        {
            image: "https://img.freepik.com/premium-photo/modern-living-room-interior-design-with-bookcase_41470-2384.jpg",
            title: "Modular Bookshelf with Display Units",
            rating: 4.8,
            reviews: 2100,
            price: 18999,
            originalPrice: 21999,
            discount: 13,
            colors: ["#8B4513", "#A0522D", "#D2691E"],
            stockStatus: "IN STOCK"
        }
    ];

    return (
        <div className='max-w-[90%] mx-auto'>
            <div className="w-full flex justify-between mt-12 mb-2">
                <div></div>
                <h2 className="text-[1.4rem] font-serif" style={{ color: '#E5CBA3', fontWeight: 400 }}>
                    <span className="italic  font-serif">new</span> <span className="font-normal">Arrivals</span>
                </h2>
                <button className="bg-[#e5cba3] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#d1b07a] transition">View All</button>
            </div>
            <div className='flex items-center justify-center gap-2 mt-4'>
                {newArrivals.map((product, index) => (
                    <Arivallcard key={index} product={product} />
                ))}
            </div>
            <div className="w-full flex justify-between mt-12 mb-2">
                <div></div>
                <h2 className="text-[1.4rem] font-serif" style={{ color: '#E5CBA3', fontWeight: 400 }}>
                    <span className="italic  font-serif">shop by</span> <span className="font-normal">Sellers</span>
                </h2>
                <button className="bg-[#e5cba3] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#d1b07a] transition">Shop Now {'->'}</button>
            </div>
            <div className='flex items-center justify-center gap-2 mt-4'>
                {topSellers.map((product, index) => (
                    <Arivallcard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default NewArival