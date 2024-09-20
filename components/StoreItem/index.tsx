import React from 'react';
import styles from "./style.module.css";
import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItem } from '../../src/redux/features/cartSlice';

type StoreItemProps = {
  id: string;
  availableQuantity: number;
  name: string;
  price: number;
  image: string;
};

export default function StoreItem({ id, availableQuantity, name, price, image }: StoreItemProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id, availableQuantity, name, quantity: 1, image }));
  };

  return (
    <Card className={styles.card} key={id}>
      <CardHeader title={name} />
      <CardMedia
        component="img"
        alt="Product Image"
        image={image}
        height={300}
      />
      <CardContent>
        <p>Price: {price}$</p>
        <div className={styles.cardContent}>
          <a onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
            Add To Cart
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
