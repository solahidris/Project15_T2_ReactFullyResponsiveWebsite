// Testing PR for checking
import "./App.css";
import React from "react";
import { useRef } from "react";

import Header from "./components/Header";
import LogoHeaderFooter from "./components/LogoHeaderFooter";
import Socials from "./components/Socials";
import Reviews from "./components/Reviews";
import Menu from "./components/Menu";
import Location from "./components/Location";
import Home from "./components/Home";

function App() {

  // Navbar Click Navigation Scroll
  const homeLocation = useRef(null);
  const locationLocation = useRef(null);
  const menuLocation = useRef(null);
  const reviewLocation = useRef(null);
  const socialsLocation = useRef(null);

  return (
    <div className="bg-emerald-950/90 h-screen py-20">

      {/* Website Header */}
      <LogoHeaderFooter />

      {/* Navbar Header */}
      <Header homeLocation={homeLocation} locationLocation={locationLocation} menuLocation={menuLocation} reviewLocation={reviewLocation} socialsLocation={socialsLocation}/>

      {/* Home Page */}
      <Home homeLocation={homeLocation} />

      {/* Location Page */}
      <Location locationLocation={locationLocation} />

      {/* Menu Page */}
      <Menu menuLocation={menuLocation} />

      {/* Review Page */}
      <Reviews reviewLocation={reviewLocation} />

      {/* Socials Page */}
      <Socials socialsLocation={socialsLocation} />

      {/* Footer */}
      <div className="bg-emerald-950/90 py-20"><LogoHeaderFooter /></div>

    </div>
  );
}

export default App;
