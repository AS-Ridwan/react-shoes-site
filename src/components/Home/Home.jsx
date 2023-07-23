import React from "react";
import Hero from "./Hero";
import Products from "../Products/Products";

const Home = ({ handleAddToCart, products, setProducts }) => {
  return (
    <div>
      <Hero />
      <Products
        handleAddToCart={handleAddToCart}
        products={products}
        setProducts={setProducts}
      />
    </div>
  );
};

export default Home;
