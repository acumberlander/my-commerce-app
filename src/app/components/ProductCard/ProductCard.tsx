import starIcon from '../../../icons/star.png';
import cartImg from '../../../icons/online-shopping.png';
import './ProductCard.css';
import { Product } from '../../models/Product'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { displayWithZero, setResponsiveness } from '@/app/utils/helpers';
import { useCartContext } from '../CartProvider';

const ProductCard = (product: Product) => {
  const [mobileView, setMobileView] = useState<boolean>(false);
  const { cart, setCart } = useCartContext();
  
  useEffect(() => {
    setResponsiveness(900, setMobileView);
    window.addEventListener('resize', () => setResponsiveness(900, setMobileView));
  }, []);

  const addToCart = (product: Product) => { 
    setCart([...cart, product]);
  }

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
        {/* <div>${displayWithZero(product)}</div> */}
        <div>${product.price}</div>
      </div>

      <div className="product-card-btn-container">
        {
          mobileView ? (
            <button onClick={() => addToCart(product)} className='add-to-cart'>
              <Image className='cart-icon' src={cartImg} alt="cartImg" />
            </button>
          ): (
            <button onClick={() => addToCart(product)} className='add-to-cart'>Add to Cart</button>
          )
        }
        <button className='buy-now black-btn'>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductCard