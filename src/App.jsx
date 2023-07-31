import { createContext, useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import {
  addToCart,
  addToStore,
  handleCartItemRemove,
  handleCartRemove,
} from "./components/Utils/Utils";

export const MyContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (products.length) {
      const storedCartIds = addToCart();
      const previousCart = [];
      for (const id in storedCartIds) {
        const foundProduct = products.find((product) => product.id == id);
        if (foundProduct) {
          const quantity = storedCartIds[id];
          foundProduct.quantity = quantity;
          previousCart.push(foundProduct);
        }
      }
      setCart(previousCart);
    }
  }, [products]);

  const handleAddToCart = (product, id) => {
    addToStore(id);
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

  const handleDelete = (item) => {
    const selectedItems = cart.filter((p) => p.id !== item.id);

    setCart(selectedItems);
    handleCartItemRemove(item.id);
  };
  const handleCart = () => {
    handleCartRemove();
    setCart([]);
  };

  return (
    <>
      <MyContext.Provider value={[products, setProducts, handleAddToCart]}>
        <Navbar cart={cart} />
        <Home />

        <Cart
          cart={cart}
          handleCart={handleCart}
          handleDelete={handleDelete}
        ></Cart>
      </MyContext.Provider>
    </>
  );
}

export default App;
