import "./App.css";
import Home from "./components/Home";
import LinkedIn from "./icons/linkedin-brands.svg";

function App() {
  const socialIcons = [
    { url: LinkedIn },
    { url: "../../public/icons/github-brands.svg" },
    { url: "../../public/icons/dev-brands.svg" },
    { url: "../../public/icons/instagram-brands.svg" },
  ];
  return (
    <div className="App">
      <Home socialIcons={socialIcons} />
    </div>
  );
}

export default App;
