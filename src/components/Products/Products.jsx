import React, { useContext, useEffect } from "react";
import Product from "./Product";
import { MyContext } from "../../App";

const Products = () => {
  const [products, setProducts, handleAddToCart] = useContext(MyContext);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [setProducts]);

  return (
    <div>
      <h1 className="my-16">Our Top Products </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
