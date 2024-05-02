import { Button } from "@mui/material"
import './ProductWindow.css';
import ProductCard from "../ProductCard/ProductCard";
import searchIcon from '../../../icons/search-interface-symbol.png';
import { Product } from "../models/Product";
import Image from "next/image";

const ProductWindow = () => {
  
  const products: Product[] = [
    {
      id: 'ifopqiawjef',
      title: 'test product',
      price: 10.51,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      reviews: ['nice', 'excellent!', 'Pretty cool!', "It's alright I guess."],
      stars: 4,
    },
    {
      id: 'kj1;2l3kn',
      title: 'test product',
      price: 19.49,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      reviews: ['nice', 'excellent!', 'Pretty cool!', "It's alright I guess."],
      stars: 4,
    },
    {
      id: 'asdfasdf',
      title: 'test product',
      price: 14.55,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      reviews: ['nice', 'excellent!', 'Pretty cool!', "It's alright I guess."],
      stars: 4,
    },
    {
      id: 'qwerasdgv',
      title: 'test product',
      price: 134.99,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      reviews: ['nice', 'excellent!', 'Pretty cool!', "It's alright I guess."],
      stars: 4,
    },
    {
      id: 'nmrtuawe23',
      title: 'test product',
      price: 134.99,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      reviews: ['nice', 'excellent!', 'Pretty cool!', "It's alright I guess."],
      stars: 4,
    },
    {
      id: '346523ygaegsadrf',
      title: 'test product',
      price: 134.99,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      reviews: ['nice', 'excellent!', 'Pretty cool!', "It's alright I guess."],
      stars: 4,
    },
  ]
  return (
    <div className="product-window-container">
      
      <div className="btn-container">
        <div className='filter-container'>
          <Button className="black-btn">All</Button>
          <Button className="white-btn">Electronics</Button>
          <Button className="white-btn">Men</Button>
          <Button className="white-btn">Women</Button>
        </div>
        <Button className="white-btn see-all-products-btn">See All Products</Button>
      </div>
      <div className="products-container">
        {
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        }
      </div>
    </div>
  )
}

export default ProductWindow