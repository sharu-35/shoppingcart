import React, { useEffect, useState } from 'react'
import './Cart.css'

const Cart = ({cart,setcart}) => {

  const [total,settotal]=useState(0);
  useEffect(()=>{
    settotal(cart.reduce((acc,curr)=>acc + parseInt(curr.amt),0))
  },[cart]);
  return (
   <>
   <h1 className='card-heading'>Cart Products</h1>
   <div className="cart-container">
   {cart.map((products)=>(
    <div className="cart-product" key={products.id}>
      <div className="img">
        <img src={products.pic} alt=''></img>
      </div>
      <div className="cart-product-detailes">
        <h3>{products.name}</h3>
        <p>price RS : {products.amt}</p>
      </div>
    </div>
    ))}
   </div>
   <h2 className='card-amt'>Total Amount RS : {total}</h2>
   </>
  )
}

export default Cart
