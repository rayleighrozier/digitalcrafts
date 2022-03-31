import React from "react";

import Item from "./Item";

export default function Cart({ cart, setCart }) {
  console.log(cart);
  console.log(setCart);
  return (
    <div>
      <h1>Cart</h1>
      <div className="item-container">
        {cart?.map((item) => {
          return <Item item={item} cart={cart} setCart={setCart} />;
        })}
      </div>
    </div>
  );
}
