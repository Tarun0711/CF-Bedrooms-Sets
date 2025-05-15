import React from 'react'
import background from '../assets/background.mp4'
import Explore from './Explore'
import ShopByStyle from './ShopByStyle'
import ShopBySets from './ShopBySets'
import ModernFurnitureInfo from './ModernFurnitureInfo'
import Footer from './Footer'
import NewArival from './NewArival'
function Home() {
  return (
    <>
    <div className="relative w-full h-[85vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white bg-black/20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 drop-shadow-lg">
          Elevated Designs for<br />Thoughtful Living
        </h1>
        <div className="flex gap-1 justify-center">
          <button className="bg-transparent underline border-none border-b-2 border-white text-white text-lg font-thin px-6 py-2 cursor-pointer hover:border-gray-300 transition-all">
            SHOP BEDS
          </button>
          <button className="bg-transparent underline border-none border-b-2 border-white text-white text-lg font-thin px-6 py-2 cursor-pointer hover:border-gray-300 transition-all">
            EXPLORE ALL COLLECTIONS
          </button>
        </div>
      </div>
    </div>
    <Explore/>
    <ShopByStyle/>
    <ShopBySets/>
    <NewArival/>
    <ModernFurnitureInfo/>
    <Footer/>
    </>
  )
}

export default Home