import "./App.css";
import Item from "./components/Item";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const items = [
    {
      name: "Pastel Nikes",
      description: "Prettier than the other ones",
      price: "$120",
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "High Top Nikes",
      description: "Cooler than the other ones",
      price: "$150",
      img: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Plain Nikes",
      description: "Match more outfits than the other ones",
      price: "$100",
      img: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      {" "}
      <h1>Items</h1>
      <div className="item-container">
        {items.map((item) => {
          return <Item item={item} cart={cart} setCart={setCart} />;
        })}
      </div>
    </div>
  );
}

export default App;
