'use client'
import React from 'react'
import styles from "./style.module.css";
import { useAppSelector } from '@/redux/store';

function index() {
  
  const cartItems = useAppSelector((state) => state.cart.items);
  
  const totalPrice = () => {
  let total = 0;
  cartItems.forEach(item => {
    total += item.price * item.quantity;
  });
  return total===0?0:total+4;
};

  return (
    <div className={styles.Container}>
      <h3>Your Order:</h3>
      <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {/* <Image src={item.image} alt='Item Id: {item.id}' height={50} width={50}></Image>*/}Name: {item.name}, Quantity: {item.quantity} 
            </li>
          ))}
      </ul>
      <h3>Total: {totalPrice()}$</h3>
    </div>

  )
}

export default index