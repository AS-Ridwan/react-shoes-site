import React from "react";
import Hero from "./Hero";
import Products from "../Products/Products";

const Home = ({ handleAddToCart }) => {
  return (
    <div>
      <Hero />
      <Products handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Home;
