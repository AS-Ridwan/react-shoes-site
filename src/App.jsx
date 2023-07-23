import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    let newCart = [];

    const exist = cart.find((item) => item.id == product.id);
    const rest = cart.filter((c) => c.id !== product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      product.quantity = product.quantity + 1;
      newCart = [...rest, product];
    }
    setCart(newCart);
  };

  return (
    <>
      <Navbar cart={cart} />
      <Home handleAddToCart={handleAddToCart} />

      <Cart cart={cart}></Cart>
    </>
  );
}

export default App;
