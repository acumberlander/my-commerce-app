import SliderItem from '../SliderItem/SliderItem'
import './Slider.css';

const Slider = (products) => {
  return (
    <div className="carousel-window">
      <div className="carousel-item-container">
        {
          Array.isArray(products) &&
          products?.map((product) => (
            <SliderItem key={product.id} {...product} />
          ))
        }
      </div>
    </div>
  )
}

export default Slider