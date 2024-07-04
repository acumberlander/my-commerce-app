'use client';

import { Container } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {Divider, Typography, Button} from '@mui/material';
import { CartContext } from '../../app/components/CartProvider';
import ProductCard from '../../app/components/ProductCard/ProductCard';
import Hero from '../../app/components/Hero/Hero';
import './page.css';

const testProduct = {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Do...",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
      "rate": 1.9,
      "count": 100
    }
}

const CartPage = () => {
  const { cart, addToCart, removeFromCart, emptyCart } = useContext(CartContext);
  
  const EmptyCart = () => (
    <div className="">
      <span>You have no items in your shopping cart, {' '}</span>
      <a href="/">start adding some</a>!
    </div>
  );

  const FilledCart = () => (
		<div className='cartItemsContainer'>
			<div className='toolbar' />
			<Typography className='title' variant="h6">
				My Cart
			</Typography>
			<Divider className='divider' />
			<div>
        {cart?.map((item) => (
					<ProductCard key={item.id} product={item} />
				))}
			</div>
			<div className='emptyButtonContainer'>
				<Button
					className='emptyButton'
					size="large"
					type="button"
					variant="contained"
					color="secondary"
					onClick={()=> setCart([])}
				>
					Empty Cart
				</Button>
			</div>
		</div>
  );
  
  const OrderSummary = () => (
		<div className='orderSummaryContainer'>
			<div className='toolbar' />
			<Typography className='title' variant="h6">
				Order Summary
			</Typography>
			<Divider className='divider' />
			<div className='subtotalContainer'>
				<span>Subtotal</span>
			</div>
			<span>Estimate Shipping</span>
			<Divider className='divider' />
			<div className='totalContainer'>
				<span>Total</span>
			</div>
			<div className='checkoutButtonContainer'>
				<Button
					component={Link}
					to="/checkout"
					className='checkoutButton'
					size="large"
					type="button"
					variant="contained"
				>
					Checkout
				</Button>
			</div>
		</div>
	);

  return (
    <Container className='cart-container'>
      <Hero />
			{!cart?.length ? (
				<EmptyCart />
			) : (
				<>
					<FilledCart />
					<OrderSummary />
				</>
			)}
		</Container>
  )
}

export default CartPage