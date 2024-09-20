import React from 'react'
import styles from "./style.module.css";
import { Card, CardContent ,CardHeader ,CardMedia} from '@mui/material';

type StoreItemProps = {
  id: string,
  name: string,
  price: number,
  image:string,
}

export default function index({id , name , price , image} : StoreItemProps) {
  return (
    <Card className={styles.card} key={id}>
    <CardHeader title={name}/>
    <CardMedia
      component="img"
      alt="Product Image"
      image={image}
      height={300}
    />
    <CardContent>
      <p>Price : {price}$</p>
      <div className={styles.cardContent}>
        <a href=''>Add To Cart</a>
      </div>
    </CardContent>
    </Card>
  )
}
