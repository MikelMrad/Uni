import React from 'react'
import NavBar from "../../modules/NavBar/index";
import Categories from "../../modules/Categories/index";
import styles from "./style.module.css";

export default function index() {
  return (
    <div className={styles.Container}>
      <NavBar/>
      <Categories/>
      <div className={styles.NavBtns}>
        <a href='/'>
          <h1>Continue Shopping</h1>
        </a>
        <a href='/Checkout'>
          <h1>Checkout</h1>
        </a>
      </div>
    </div>
  )
}
