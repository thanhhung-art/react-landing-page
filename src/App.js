import "./sass/index.scss";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <AboutUs />
      <OurServices />
    </div>
  );
}

export default App;
