import "./App.css";

import Nav from "../src/Nav";
import Sidebar from "../src/Sidebar";
import Body from "../src/Body";
import Footer from "../src/Footer";
import { useState } from "react";

function App() {
  const { status, getStatus } = useState("");
  console.log(status);
  return (
    <>
      <div>
        <p>{status}</p>
        <p>Status</p>
      </div>
      <div class="container">
        <Nav status={status} getStatus={getStatus} />
        <div className="middle">
          <Sidebar />
          <Body />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
