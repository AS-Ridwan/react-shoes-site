import React, { useContext, useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MyContext } from "../../App";

const Product = ({ product }) => {
  const [products, setProducts, handleAddToCart] = useContext(MyContext);
  const [showImg, setShowImg] = useState(false);
  const { id, name, price, pairImage, sideImage, quantity, color } = product;

  return (
    <div
      onMouseEnter={() => setShowImg(true)}
      onMouseLeave={() => setShowImg(false)}
      className="card card-compact max-w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <img src={showImg ? sideImage : pairImage} alt="Shoes" />
      </figure>
      <div className="card-body flex flex-row justify-between items-end">
        <div className="text-start">
          <h2 className="card-title bg-yellow-400">{name}</h2>
          <p>{color}</p>
          <p>${price}</p>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(product, id)}
            className="btn bg-black text-white hover:text-black"
          >
            {" "}
            <BsFillCartCheckFill />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
