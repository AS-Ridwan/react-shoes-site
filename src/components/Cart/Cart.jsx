import React from "react";
import { AiFillDelete } from "react-icons/ai";
import CartDetails from "./CartDetails";
const Cart = ({ cart, handleCart, handleDelete }) => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <div className="flex justify-between items-center p-2">
              <h2 className="font-bold text-lg">Cart Products</h2>
              <button onClick={handleCart} className="border-1 border-black">
                remove
              </button>
            </div>
            {cart.map((item) => (
              <CartDetails
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              ></CartDetails>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
