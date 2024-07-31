import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./component/Header"
import Home from "./component/Home"
import Cart from "./component/Cart"
import "./App.css"


function App() {


  return (
    <>
   
     <BrowserRouter>
     <Header/>
     <div className="container">
      <Routes>
      <Route index element={<Home/>} />
      <Route path="cart" element={<Cart/>} />
      </Routes>
     </div>
     </BrowserRouter>
    
    </>
  )
}

export default App
