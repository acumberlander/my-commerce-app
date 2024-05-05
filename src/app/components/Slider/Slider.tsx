import SliderItem from '../SliderItem/SliderItem'
import './Slider.css';

import { Product } from '@/app/models/Product';

const Slider = (products: Product[]) => {
  return (
    <div className="carousel-window">
      <div className="carousel-item-container">
        {
          products?.map((product) => (
            <SliderItem key={product.id} {...product} />
          ))
        }
      </div>
    </div>
  )
}

export default Slider