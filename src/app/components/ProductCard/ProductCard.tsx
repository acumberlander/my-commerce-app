import starIcon from '../../../icons/star.png';
import cart from '../../../icons/online-shopping.png';
import './ProductCard.css';
import { Product } from '../../models/Product'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProductCard = (product: Product) => {
  const [mobileView, setMobileView] = useState<boolean>(false);
  const displayWithZero = () => {
    const firstNumAfterDecimal = product.price.toString().split('.')[1];
    if (firstNumAfterDecimal) {
      if (firstNumAfterDecimal.length < 2) {
        return product.price + '0';
      }
    } else {
      return product.price + '.00'
    }
    return product.price;
  };

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, [])

  return (
    <div className="product-card-container">
      <div className='image-and-category' style={{backgroundImage: `url(${product.image})`, backgroundSize: 'cover'}}>
        <div className='product-category'>{product.category}</div>
      </div>

      <div className='product-name'>{product.title}</div>

      <div className="review-and-price-container">
        <div className="product-card-review-section">
          <div className="star-and-review-group">
            <Image className='star-icon' src={starIcon} alt="stars" />
            <div className="review-text">{product.stars} {' '} ({product?.reviews?.length} Reviews)</div>
          </div>
        </div>
        <div>${displayWithZero()}</div>
        {/* <div>${product.price}</div> */}
      </div>

      <div className="product-card-btn-container">
        {
          mobileView ? (
            <button className='add-to-cart'>
              <Image className='cart-icon' src={cart} alt="cart" />
            </button>
          ): (
            <button className='add-to-cart'>Add to Cart</button>
          )
        }
        <button className='buy-now black-btn'>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductCard