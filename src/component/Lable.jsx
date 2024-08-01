import React from 'react'
import "./Lable.css"
const Lable = ({products,cart,setcart}) => {
  const name = products.name> 21 ? products.
  name.substring(0,20) + ".." : products.name;

  const addcart=()=>{
    setcart([...cart,products]);
  };
  const removecart=()=>{
    setcart(cart.filter((e)=>cart.id !== products.id));
  };
  return (
    <>
    <div className='product'>
        <div className="img">
            <img src={products.pic} alt={products.name} />
        </div>
        <div className="detailes">
        <h3>{products.name}</h3>
        <p>Price Rs:{products.amt}</p>
        {cart.includes(products) ? <button className='btnremove' onClick={removecart}>
          Remove From Cart</button>:
        <button onClick={addcart}>Add to cart</button>}
        </div>
    </div>
    </>
  )
}

export default Lable
