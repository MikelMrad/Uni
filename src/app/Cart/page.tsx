'use client'
import React from 'react'
import Image from 'next/image';
import NavBar from "../../../modules/NavBar/index";
import styles from "./style.module.css";
import { useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../../redux/features/cartSlice';
import { useAppSelector } from '@/redux/store';

export default function page() {

  const dispatch = useDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeItem(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={styles.Container}>
      <NavBar/>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {/* <Image src={item.image} alt='Item Id: {item.id}' height={50} width={50}></Image>*/}Name: {item.name}, Quantity: {item.quantity} 
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  )
}
