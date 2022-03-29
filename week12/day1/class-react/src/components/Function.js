import { useState } from "react";
export const FunctionalComponent = () => {
  // state is a place to store data for later
  // state is a place to force react to show changes
  // state dictates what the component renders
  // state is a save game memory file
  // use data between pages
  //changing state causes a component to rerender
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1> Functions</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <button onClick={() => setCounter(counter - 1)}>Subtract</button>
    </div>
  );
};
export const FunctionalComponent2 = () => {
  return (
    <div>
      <h1> Functions 2</h1>
    </div>
  );
};
