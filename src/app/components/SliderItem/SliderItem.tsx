import { Product } from '@/app/models/Product'
import './SliderItem.css';

const SliderItem = (product: Product) => {
  return (
    <div className="carousel-item" style={{backgroundImage: `url(${product.image})`}}>
      <div className="slider-category">{product.category}</div>
    </div>
  )
}

export default SliderItem