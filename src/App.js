import "./sass/index.scss";
import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import Gallery from "./components/Gallery";
import OurClients from "./components/OurClients";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";

const copyright = {
  "textAlign" : "center",
  "padding" : "1.7rem 0 2.7rem"
}

const styleA = {
  "color" : "#6372ff",
  "textDecoration" : "none"
}

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <AboutUs />
      <OurServices />
      <Gallery />
      <OurClients />
      <OurTeam />
      <Footer />
      <div className="copyright" style={copyright} className="text">
        <p>© 2018 Issaaf Kattan React Land Page Template. Design by <a style={styleA} href="#">TemplateWire</a></p>
      </div>
    </div>
  );
}

export default App;
