import React from "react";

const Cart = ({ cart }) => {
  // const { name, price, color, quantity } = item;
  // console.log(cart);

  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {cart.map((item, index) => (
              <div key={index} className="flex p- m-2 border-2 border-blue-200">
                {/* Sidebar content here */}
                <div>
                  <img src={item.sideImage} className="w-20 mr-4" alt="" />
                </div>
                <div className="text-start">
                  <p>
                    {item.name} {item.color}
                  </p>
                  <p>${item.price}</p>
                  <p>{item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
