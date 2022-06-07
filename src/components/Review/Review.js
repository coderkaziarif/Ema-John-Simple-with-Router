import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import {getDatabaseCart} from'../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
const Review = () => {
  const [cart,setCart]= useState([]);
   
  useEffect(()=>{
      const sameProduct = getDatabaseCart();
      const productKeys = Object.keys(sameProduct);
      // to find out the value of property.
      // const product = productKeys.map(key=> sameProduct[key]);
      const cartProducts = productKeys.map(key=> {
        const product = fakeData.find(pd => pd.key === key);
        product.quantity = sameProduct[key];
        return product
      });
      setCart(cartProducts)
      // console.log(cartProducts);
  });
  return (
    <div>
      <h2>Product Item :{cart.length} </h2>
      {
        cart.map(pd => <ReviewItem 
          key = {pd.key}
          product = {pd}></ReviewItem>)
      }

    </div>
  );
};

export default Review;