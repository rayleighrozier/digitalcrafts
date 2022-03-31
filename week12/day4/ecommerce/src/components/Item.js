import React from "react";

export default function ({ item, cart, setCart }) {
  return (
    <div className="item">
      <img className="item-image" src={item?.img} />
      <div className="item-details">
        <p>{item?.name}</p>
        <p>{item?.description}</p>
        <p>{item?.price}</p>
        <button onClick={() => setCart([...cart, item])}>Add To Cart</button>
      </div>
    </div>
  );
}
