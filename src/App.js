import "./App.css";
// import AppDescription from "./components/AppDescription";

import maphardcode from "./map_hardcode.png";
import { useState, useRef } from "react";

import Header from "./components/Header";
import LogoHeaderFooter from "./components/LogoHeaderFooter";
import Socials from "./components/Socials";
import Reviews from "./components/Reviews";

function App() {

  // Drinks Initial State Value
  const [drinksMenu, setDrinksTemp] = useState([
    {name: "Americano", temp: "hotDrink", hotPrice: "RM 7", icedPrice: "RM 9", hotPic:"https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?", icedPic:"https://globalassets.starbucks.com/assets/921a409e6f55407da52eee4c8ad13ada.jpg?"},
    {name: "Latte", temp: "hotDrink", hotPrice: "RM 9", icedPrice: "RM 11", hotPic:"https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?", icedPic:"https://globalassets.starbucks.com/assets/f4fd128c834643fa8c74f4ae9f579013.jpg?"},
    {name: "Mocha", temp: "hotDrink", hotPrice: "RM 11", icedPrice: "RM 13", hotPic:"https://globalassets.starbucks.com/assets/915736da018842e788147f7eab73db73.jpg?", icedPic:"https://globalassets.starbucks.com/assets/0360378c6e774cc3a38d870fc75d5462.jpg?"},
    {name: "Caramel Macchiato", temp: "hotDrink", hotPrice: "RM 12", icedPrice: "RM 14", hotPic:"https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg?", icedPic:"https://globalassets.starbucks.com/assets/363835b1db024636adeb4089ebb96291.jpg?"}]);

  // Drinks (H/C) Button Click Handler
  const drinksMenuHandler = (event, index) => {
    const newDrinksMenu = [...drinksMenu];
    newDrinksMenu[index].temp = event.target.value;
    setDrinksTemp(newDrinksMenu);
    console.log(drinksMenu, 'drinksMenu')
  };

  // Navbar Click Navigation Scroll
  const homeLocation = useRef(null);
  const locationLocation = useRef(null);
  const menuLocation = useRef(null);
  const reviewLocation = useRef(null);
  const socialsLocation = useRef(null);

  // Review Data for Carousel
  // const reviewData = [
  //   {user: "Azrai Naqiuddin", comment: "kat sini ada jam pasir hihihi, plus a caramel macchiato yang dibuat oleh barista sedap 🥺👍👍"}, 
  //   {user: "Danial Syafiq", comment: "Great coffee. The barista was very knowledgeable about his coffee"}, 
  //   {user: "Nailah", comment: "Fuyoo. Kedai ni cool sangat. Ada Ong. kedekkedek Ong. kedekkedek"}, 
  //   {user: "Hafiz Ahmad", comment: "A good place to hangout at nite. Tiptop service & very friendly employee. Serve light food."}, 
  //   {user: "Uncle Roger", comment: "Sedap, harga berpatutan, selesa"}
  // ];

  // Review Data Position Snap
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const carouselRef = useRef(null);


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

{/* Location Page 2.0 */}
<div className="bg-emerald-950/90 py-20">

  <p id="locationId" ref={locationLocation} className="text-white text-center mb-10 font-mono tracking-widest text-lg"> [ location ]  </p>
  <a href="https://goo.gl/maps/URHa9eLMsTkaY6BD6">
    <div className="transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
      <div className="flex justify-center">
        <img src={maphardcode} alt="" className="object-contain max-w-[200px] lg:max-w-[400px]" />
      </div>
      <div className="font-mono text-white">
        <p className="text-xs font-bold text-center mx-[20%] my-2">📍 Coffee and Kicks</p>
        <p className="text-[10px] text-center mx-[30%]">44, Jalan Tengku Ampuan Zabedah A 9/A, Seksyen 9, 40100 Shah Alam, Selangor</p>
      </div>
    </div>
  </a>

</div>

{/* Menu Page 2.0 - this is good for now i think */}
<div className="py-20 bg-emerald-100/20">
      
  <p id="menuId" ref={menuLocation} className="text-center mt-[-2.2rem] mb-10 font-mono tracking-widest text-lg"> [ menu ]  </p>
  <div className="grid grid-cols-2 gap-10 mx-10 md:mx-[13rem] lg:mx-[16rem]">
    {drinksMenu.map((air, index) => (
        <div key={index} className="flex-col bg-gray-300/60 rounded-3xl transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
            <div className="flex justify-center bg-[#1f3933] rounded-t-3xl">
              <img src={ air.temp === "hotDrink" ? air.hotPic : air.icedPic} alt="" className="rounded-t-3xl min-h-[150px] min-w-[150px] max-h-[300px] max-w-[300px]"/>
            </div>
            <p className="text-end mt-[-20px] mr-[8px] text-gray-200/90 text-[0.6rem] z-20 font-mono">{air.temp === "hotDrink" ? air.hotPrice : air.icedPrice}</p>
            <div className="flex justify-center py-8 text-xs font-mono">
              <span>{air.name}</span>
            </div>
            <div className="flex justify-center pb-8">
              <button value="hotDrink" onClick={(event) => drinksMenuHandler(event, index)} className="px-[0.6rem] py-1 text-white rounded-full bg-emerald-900 hover:bg-gradient-to-r from-orange-500 to-red-600 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">H</button>
              <button value="coldDrink" onClick={(event) => drinksMenuHandler(event, index)} className="px-[0.6rem] py-1 text-white rounded-full ml-2 bg-emerald-900 hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">C</button>
            </div>
        </div>
    ))}
  </div>
  
</div>


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
