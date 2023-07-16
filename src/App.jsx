import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [cart, setCart] = useState([]);
  const [myProduct, setMyProduct] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    setMyProduct(product);
    console.log(cart);
  };

  return (
    <>
      <Navbar cart={cart} />
      <Home handleAddToCart={handleAddToCart} />
      <Cart />
    </>
  );
}

export default App;
