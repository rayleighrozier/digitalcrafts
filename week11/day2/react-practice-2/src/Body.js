import React from "react";
import Plot from "react-plotly.js";
const data = [{ type: "bar", x: [1, 2, 3], y: [2, 5, 3] }];
export default function Body(props) {
  return (
    <div className="body">
      <p>body</p>
      <Plot data={data} />
    </div>
  );
}
