import React from "react";

export default function Nav(props) {
  const getName = () => {
    console.log("Nav");
  };
  return (
    <div className="nav">
      <button onClick={props.getStatus("nav")}>Nav</button>
      <p>Nav</p>
    </div>
  );
}
