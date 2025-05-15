import React from 'react'
import Card from './Card'

const materials = [
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStXdv4SdLklNbvxo57UxmrQ1Fo4vz40FFXbQ&s', label: 'Wood' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xIoeL0n7l_9IQBKS-ne5H7NqxcCqCp_c2g&s', label: 'Matte' },
  { image: 'https://as2.ftcdn.net/jpg/05/43/61/29/1000_F_543612970_NMHluFffDFQ9wYqJ94UKVXXdppFzTuek.jpg', label: 'Glossy' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3WgrClPZdSmOLZBoGtaatbOMv5cQEE1EeA&s', label: 'Natural' },
  // { image: 'https://via.placeholder.com/150/CCBBAA', label: 'STUDY TABLES' },

]

function ExploreByMaterials() {
  return (
    <div style={{ margin: '40px 0' }}>
      <h2 style={{ color: '#E5CBA3', textAlign: 'center', marginBottom: 32 }}>EXPLORE BY MATERIALS</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
        {materials.map((item, idx) => (
          <Card key={idx} image={item.image} label={item.label} />
        ))}
      </div>
    </div>
  )
}

export default ExploreByMaterials 