import React from 'react'
import { products } from '@/app/data/apiRequests'
import SliderItem from '../SliderItem/SliderItem'
import './Slider.css';

const Slider = () => {
  return (
    <div className="carousel-window">
      <div className="carousel-item-container">
        {products.map((product) => (
          <SliderItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default Slider