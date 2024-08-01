import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./component/Header"
import Home from "./component/Home"
import Cart from "./component/Cart"
import "./App.css"
import { useState } from "react"


function App() {
const [cart,setcart]=useState([])

  return (
    <>
   
     <BrowserRouter>
     <Header cart={cart}/>
     <div className="container">
      <Routes>
      <Route index element={<Home cart={cart} setcart={setcart} />} />
      <Route path="cart" element={<Cart cart={cart} setcart={setcart}/>} />
      </Routes>
     </div>
     </BrowserRouter>
    
    </>
  )
}

export default App
