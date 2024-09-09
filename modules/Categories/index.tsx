import React from 'react'
import styles from './style.module.css'
import { Card, CardContent ,CardHeader ,CardMedia} from '@mui/material';

export default function index() {
  const categories = [
    { id: "men", label: "Men", icon: "../../static/man.png" },
    { id: "women", label: "Women", icon: '../../static/woman.png' },
    { id: "kids", label: "Kids", icon: '../../static/baby-boy.png' },
    { id: "accessories", label: "Accessories", icon: '../../static/earrings.png'   },
    { id: "footwear", label: "Footwear", icon: '../../static/shoes.png' },
  ];
  
  return (
    <div className={styles.container}>
      <h1> Categories</h1>
      <div className={styles.cardContainer}>
      {categories.map((category) => (
        <a href=''>
          <Card className={styles.card}>
          <CardHeader title={category.label}/>
          <CardMedia
            component="img"
            alt="Product Image"
            image={category.icon}
          />
          <CardContent>
            <p>Shop {category.label}.</p>
          </CardContent>
          </Card>
        </a>
      ))}
      </div>
    </div>
  )
}
