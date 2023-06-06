import "./App.css";
// import AppDescription from "./components/AppDescription";

import maphardcode from "./map_hardcode.png";
import { useState, useRef } from "react";

import Header from "./components/Header";
import LogoHeaderFooter from "./components/LogoHeaderFooter";
import Socials from "./components/Socials";
import Reviews from "./components/Reviews";
import Menu from "./components/Menu";
import Location from "./components/Location";

function App() {

  // Navbar Click Navigation Scroll
  const homeLocation = useRef(null);
  const locationLocation = useRef(null);
  const menuLocation = useRef(null);
  const reviewLocation = useRef(null);
  const socialsLocation = useRef(null);



  return (
    <div className="bg-emerald-950/90 h-screen py-20">
      {/* <AppDescription /> */}

      {/* Website Header */}
      <LogoHeaderFooter />

      {/* Navbar Header */}
      <Header homeLocation={homeLocation} locationLocation={locationLocation} menuLocation={menuLocation} reviewLocation={reviewLocation} socialsLocation={socialsLocation}/>

{/* Home Page */}
      <div className="bg-gray-100 px-10 lg:px-[20rem] py-20">
        {/* home title */}
        <p id="homeId" ref={homeLocation} className="text-center font-mono tracking-widest text-lg"> [ home ]  </p>
        
        <div className="bg-emerald-950/90 text-white mt-10 mb-20 py-10 px-5 text-center font-mono text-xs rounded-3xl transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
          <p>We believe in a simple formula,</p>
          <p className="mt-6 text-black rounded-t-3xl pt-5 pb-1 px-2 font-bold text-base bg-white ">Good Coffee + Good Kicks =</p>
          <p className="mb-6 mt-[-0.1rem] text-black rounded-b-3xl pb-5 pt-1 px-2 font-bold text-base bg-white ">Good Times</p>
          <p className="italic">So enjoy your cuppa. Coffee up!</p>
        </div>
      </div>

      {/* Location Page */}
      <Location locationLocation={locationLocation} />

      {/* Menu Page */}
      <Menu menuLocation={menuLocation} />

      {/* Review Page */}
      <Reviews reviewLocation={reviewLocation} />

      {/* Socials Page */}
      <Socials socialsLocation={socialsLocation} />

      {/* Footer */}
      <div className="bg-emerald-950/90 py-20">
        <LogoHeaderFooter />
      </div>
    </div>
  );
}

export default App;
