import React from 'react';
import NavBar from "../../modules/NavBar/index";
import Banner from "../../modules/Banner/index";
import Categories from "../../modules/Categories/index";

export default function index() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Categories/>
    </div>
  )
}
