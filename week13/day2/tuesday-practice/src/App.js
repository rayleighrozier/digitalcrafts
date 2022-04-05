import "./App.css";
import { useDispatch } from "react-redux";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
  const dispatch = useDispatch();
  // dispatch({ type: "ON_START" });
  return (
    <div className="App">
      <Weather />
      {/* <h1>hiiiiii</h1> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
