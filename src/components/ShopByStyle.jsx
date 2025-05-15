import React from 'react'

const data = [{
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjazRWwdaJcX3YjiK-7ksDEGUoLscdnhoG2XU-9627FIJgPGrwEfXE3RnGYXtCwMBZEQA&usqp=CAU',
    lable: 'Luxury'
},
{
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQk9qoBZUQYQJj2YyZPmSCRBIIIQ8H3CBSWw&s',
    lable: 'Modern'
}, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWPcxUIugbLIahYmTSdAFo5N0xV930m9SGg&s',
    lable: 'Contemporary'
}, {
    image: 'https://i.pinimg.com/736x/cb/d0/91/cbd091752be62a60ed79bc4dd407a1a7.jpg',
    lable: 'Minimalist'
}]

function ShopByStyle() {
    return (
        <div className="py-12 px-4 max-w-7xl mx-auto">
            <h2 style={{ color: '#E5CBA3', textAlign: 'center', marginBottom: 32 }}>Shop By Style</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {data.map((item, index) => (
                    <div key={index} className="text-gray-100 cursor-pointer">
                        <div className="relative overflow-hidden shadow-lg">
                            <img 
                                src={item.image} 
                                alt={item.lable} 
                                className="w-full border-2 overflow-hidden border-spacing-1 border-gray-400 rounded-lg  h-96 object-cover"
                            />
                                <p className="text-start text-md font-thin p-4 hover:text-white transition-colors duration-300">
                                    {item.lable}
                                </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopByStyle