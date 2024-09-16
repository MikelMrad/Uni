'use client';
import React from 'react';
import NavBar from "../../modules/NavBar/index";
import Banner from "../../modules/Banner/index";
import Categories from "../../modules/Categories/index";
import Footer from "../../modules/Footer/index"
import StoreItems from "../../data/products.json"
import StoreItem  from "../../components/StoreItem/index"
import { Grid2 } from '@mui/material';

export default function index() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Categories/>
      <div>
      </div>
        <Grid2 
        container
        spacing={4}>
        {StoreItems.map(item => (
          <Grid2 size={2.4}>
            <StoreItem {...item} key={item.id} /> 
          </Grid2>
        ))}
        </Grid2>
      <Footer/>
    </div>
  )
}
