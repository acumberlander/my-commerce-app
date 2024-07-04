'use client';
import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	EMPTY_CART,
} from '../constants/actionTypes';
import React, { createContext, useReducer } from "react";
import cartReducer from "../reducers/cart";

const CartContext = createContext();

const initialState = {
  items: [],
  quantity: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    const cart = { items: [...state.items, product], quantity: state.quantity + 1};
		dispatch({ type: ADD_TO_CART, payload: cart});
  };

  const removeFromCart = (productId) => {
    const cart = {items: state.items.filter((item) => item.id !== productId), quantity: state.quantity - 1};
    dispatch({ type: REMOVE_FROM_CART, payload: cart });
  };

  const emptyCart = () => {
    const cart = { items: [], quantity: 0 };
    dispatch({ type: EMPTY_CART, payload: cart });
  };

  return (
    <CartContext.Provider value={{ cart: state, addToCart, removeFromCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };