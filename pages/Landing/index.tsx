import React from 'react';
import NavBar from "../../modules/NavBar/index";
import Banner from "../../modules/Banner/index";
import Categories from "../../modules/Categories/index";
import Footer from "../../modules/Footer/index"

export default function index() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Categories/>
      <Footer/>
    </div>
  )
}
