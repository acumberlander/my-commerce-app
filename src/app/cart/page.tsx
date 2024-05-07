import { Container } from '@mui/material'
import React from 'react'




const CartPage = ({}) => {


  const EmptyCart = (): React.ReactElement => (
  <div className="">
    <span>You have no items in your shopping cart, {' '}</span>
    <a href="/">start adding some</a>!
  </div>
);
  return (
    <Container className=''>
			{/* {!cart.line_items.length ? (
				<EmptyCart />
			) : (
				<>
					<FilledCart />
					<OrderSummary />
				</>
			)} */}
		</Container>
  )
}

export default CartPage