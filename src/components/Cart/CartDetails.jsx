import React from "react";
import { AiFillDelete } from "react-icons/ai";

const CartDetails = ({ item, handleDelete }) => {
  const { sideImage, name, color, price, quantity, id } = item;
  return (
    <div>
      <div className="flex p- m-2 border-2 border-blue-200 justify-around">
        <div>
          <img src={sideImage} className="w-20 mr-4" alt="" />
        </div>
        <div className="text-start">
          <p>
            {name} {color}
          </p>
          <p>${price}</p>
          <p>{quantity}</p>
        </div>
        <div className="flex items-center ">
          <AiFillDelete
            onClick={() => handleDelete(item)}
            className="text-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
