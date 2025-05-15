import React from 'react'
import Card from './Card'

const types = [
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1kpKhJlOa9wSlKkG2XBMazTm-Dx9K6ycRg&s', label: 'BEDS' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbcF-ZF6icpj7IojcXRWjleqBAWNZ9J6K5bR4vTwbcXGIINJuu-Bj_yIVUBkYQmE3OC0&usqp=CAU', label: 'WARDROBES' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXl3XUpPGSbaYqpQ_dYdnUVJPD7AW30HSASg&s', label: 'BEDSIDE TABLES' },
  { image: 'https://images.woodenstreet.de/image/cache/data/dressing-tables/jett-dressing-table/revised/honey/updated/new-logo/1-750x650.jpg', label: 'DRESSERS' },
  { image: 'https://www.lakdi.com/cdn/shop/files/1_7012598e-c562-4d62-88e0-9cdeebac8e3a.jpg?v=1744030865', label: 'STUDY TABLES' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTe8GcKpjyHFWymI_THGQARcnxxrPPsqiDQ&s', label: 'SIDE CONSOLE' },
]

function ShopByType() {
  return (
    <div style={{ margin: '40px 0' }}>
      <h2 style={{ color: '#E5CBA3', textAlign: 'center', marginBottom: 32 }}>SHOP BY TYPE</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
        {types.map((item, idx) => (
          <Card key={idx} image={item.image} label={item.label} size="large" />
        ))}
      </div>
    </div>
  )
}

export default ShopByType 