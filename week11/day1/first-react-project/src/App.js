import "./App.css";
import Location from "./Location";

function App() {
  const name = "Rayleigh";
  const food = "pizza";
  const city = "Atlanta";
  return (
    <div>
      <h1>Rayleigh</h1>
      <Location city={city} />
      <p>{`Hi my name is ${name} and I like ${food}`}</p>
    </div>
  );
}

export default App;
