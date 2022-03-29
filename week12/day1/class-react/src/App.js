// don't write a lot of actual code/logic here. App is our fist component that calls the other components.
import ClassComponent from "./components/Class";
import {
  FunctionalComponent,
  FunctionalComponent2,
} from "./components/Function";

function App() {
  return (
    <div className="App">
      <h1>App js</h1>
      <ClassComponent />
      <FunctionalComponent />
      <FunctionalComponent2 />
    </div>
  );
}

export default App;
