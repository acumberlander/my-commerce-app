import starIcon from '../../../icons/star.png';
import './ProductCard.css';
import { Product } from '../../models/Product'
import { Button } from '@mui/material'
import Image from 'next/image';

const ProductCard = (product: Product) => {
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
        <div>${displayWithZero()}</div>
        {/* <div>${product.price}</div> */}
      </div>

      <div className="product-card-btn-container">
        <Button className='card-btn white-btn'>Add to Cart</Button>
        <Button className='card-btn black-btn'>Buy Now</Button>
      </div>
    </div>
  )
}

export default ProductCard