import "./App.css";
import photos from "./data/photos";
import profile from "./data/profile";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Grid from "./components/Grid";
function App() {
  return (
    <div className="App">
      <Nav />
      <Profile profile={profile} />
      <Grid photos={photos} />
    </div>
  );
}

export default App;
