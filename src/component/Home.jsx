import React, { useState } from 'react'
import product from "../assets/Product.json"
import Lable from './Lable';
import "./Home.css"

const Home = ({cart,setcart}) => {
  const [Product]=useState(product);
  return (
    <>
    <div className='product-container'>
      {Product.map((products)=>(
        <Lable key={products.id} products={products} cart={cart} setcart={setcart}/>
      ))}
     
    </div>
    </>
  )
}

export default Home
