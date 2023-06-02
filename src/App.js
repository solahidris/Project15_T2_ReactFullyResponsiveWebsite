import "./App.css";
// import AppDescription from "./components/AppDescription";
import { FaTiktok, FaInstagram, FaTwitter, GiRoundStar } from 'react-icons/fa';
import { FaRegUserCircle, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import maphardcode from "./map_hardcode.png";
import { useState } from "react";

//https://react-icons.github.io/react-icons (icons website)
// ctrl shift L to pick all same

function App() {

  const [drinksMenu, setDrinksMenu] = useState([
    {name: "Americano", temp: "hotDrink", hotPic:"https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?", icedPic:"https://globalassets.starbucks.com/assets/921a409e6f55407da52eee4c8ad13ada.jpg?"},
    {name: "Latte", temp: "hotDrink", hotPic:"https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?", icedPic:"https://globalassets.starbucks.com/assets/f4fd128c834643fa8c74f4ae9f579013.jpg?"},
    {name: "Mocha", temp: "hotDrink", hotPic:"https://globalassets.starbucks.com/assets/915736da018842e788147f7eab73db73.jpg?", icedPic:"https://globalassets.starbucks.com/assets/0360378c6e774cc3a38d870fc75d5462.jpg?"},
    {name: "Caramel Macchiato", temp: "hotDrink", hotPic:"https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg?", icedPic:"https://globalassets.starbucks.com/assets/363835b1db024636adeb4089ebb96291.jpg?"}]);
  const drinksMenuHandler = (event, index) => {
    const newDrinksMenu = [...drinksMenu];
    newDrinksMenu[index].temp = event.target.value;
    setDrinksMenu(newDrinksMenu);
    console.log(drinksMenu, 'drinksMenu')
  };

  const [drinksTemp, setDrinksTemp] = useState("hotDrinks");

  const drinksTempHandler = (event) => {
    const buttonValue = (event.target.value);
    if (buttonValue === "hotDrinks") {
      setDrinksTemp("hotDrinks");
    } else {
      setDrinksTemp("coldDrinks");
    }
  };
  // Google Map API Key
  // const apiKey = process.env.REACT_APP_GOOGLEMAP_API_KEY; // (not in use)
  const apiKeyGmaps = process.env.REACT_APP_GOOGLEMAP_API_KEY_MAP_A;

  // can export to component later
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-emerald-950/90 h-screen pt-10 pb-20">
      {/* <AppDescription /> */}

{/* Website Header */}
<div className="flex justify-center bg-white rounded-3xl mx-10 pr-2 lg:mx-[20rem] transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
        <img
          className="h-[7rem] rounded-3xl"
          src={
            "https://cdn.pentas.io/next-s3-uploads/55a71fe2-14a2-4544-a912-030d47d36bb7/IMG_R_0008.JPG"
          }
          alt="logoTitle"
        />
          <div className="self-center">
            <p className="self-center text-lg font-mono text-black font-bold tracking-widest">
              coffee and kicks
            </p>
            <div className="flex mt-[0.1rem]">
            <p className="grow self-center text-xs font-mono tracking-widest">
              caffeine near me
            </p>
            <p className="mr-2 scale-75"><FaTiktok /></p>
            <p className="scale-75"><FaInstagram /></p>
            </div>
          </div>
      </div>

{/* Navbar Header */}
      <div className="bg-gray-100 py-3 mt-10 mb-20 mx-10 lg:mx-[20rem] gap-x-5 rounded-3xl flex justify-center font-mono text-xs transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
        <button className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">home</button>
        <button className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">location</button>
        {/* <button>article</button> */}
        <button className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">menu</button>
        <button className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">reviews</button>
        <button className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">socials</button>
      </div>

{/* Home Page */}
      <div className="bg-gray-100 px-10 lg:px-[20rem] py-5">
        {/* home title */}
        <p className="text-center pt-[1rem] mb-[-2.75rem] font-mono tracking-widest text-lg"> [ home ]  </p>
        
        <div className="bg-emerald-950/90 text-white my-20 py-10 px-5 text-center font-mono text-xs rounded-3xl transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
          <p>We believe in a simple formula,</p>
          <p className="my-5 text-black rounded-3xl py-5 px-2 font-bold text-base bg-white ">Good (Coffee + Beans + Company) = Good Times</p>
          <p className="pb-5">
            And we aim to give you just that while still main a sustainable
            business on the side
          </p>
          <p className="italic">So enjoy your cuppa. Coffee up!</p>
        </div>
      </div>

{/* Location Page */}
    <div className="">
  
      <div className="bg-emerald-950/90 py-[5rem] lg:px-[20rem]">
       
        {/* Location title */} 
        <p className="text-white text-center mt-[-2.2rem] mb-10 font-mono tracking-widest text-lg"> [ location ]  </p>
        
          {/* Google Maps API Pin */}
          <div className="px-[10rem] transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">    
            <div className="flex justify-center py-2">
              <img src={maphardcode} alt="" className="scale-[120%] mb-[1rem]"/>
              {/* <iframe
                title="gmaps-pin"
                width="1200"
                height="350"
                className="border:0 rounded-3xl"
                loading="lazy"
                allowfullscreen
                src={apiKeyGmaps}
              ></iframe> */}
            </div>
            {/* Text below Gmaps */}
            <p className="text-white font-mono text-xs text-center tracking-wide">
              📍 Hirup Cafe Seksyen 990
            </p>
            <p className="mt-2 text-white font-mono text-[10px] text-center tracking-wide">44, Jalan Tengku Ampuan Zabedah A 9/A, Seksyen 9, 40100 Shah Alam, Selangor
            </p>
          </div>
      </div>

    </div>

{/* Menu Page */}
      <div className="py-20">

        {/* menu title */}
        <p className="text-center mt-[-2.2rem] mb-10 font-mono tracking-widest text-lg"> [ menu ]  </p>
          {/* 4 menu grid container */}
          <div className="grid grid-cols-2 gap-10 mx-10 lg:mx-[20rem]">

            {/* americano */}
            <div className="bg-gray-300/60 rounded-3xl grid grid-rows-3 grid-flow-col h-[18rem] lg:h-[30rem] transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">              
              { drinksTemp === "hotDrinks" ?
                <img src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?" alt="hotamericano" className="rounded-t-3xl row-end-1 row-span-2"/>
                :
                <img src="https://globalassets.starbucks.com/assets/921a409e6f55407da52eee4c8ad13ada.jpg?" alt="iceamericano" className="rounded-t-3xl row-end-1 row-span-2"/>
              }
              <p className="text-end mt-[-20px] mr-[8px] text-gray-200/90 text-[0.6rem] z-20 font-mono">RM 7</p>
              <p className="text-center row-start-2 row-span-1 row-end-3 text-xs font-mono">Americano</p>
              <div className="flex justify-center row-start-4 row-end-5 pb-4">
                <button value="hotDrinks" onClick={drinksTempHandler} className="px-[0.6rem] py-1 text-white rounded-full bg-emerald-900 hover:bg-gradient-to-r from-orange-500 to-red-600 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">H</button>
                <button value="coldDrinks" onClick={drinksTempHandler} className="px-[0.6rem] py-1 text-white rounded-full ml-2 bg-emerald-900 hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">C</button>
              </div>
            </div> 

            {/* latte  */}
            <div className="bg-gray-300/60 rounded-3xl grid grid-rows-3 grid-flow-col h-[18rem] lg:h-[30rem] transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
            { drinksTemp === "hotDrinks" ?
                <img src="https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?" alt="hotlatte" className="rounded-t-3xl row-end-1 row-span-2"/>
                :
                <img src="https://globalassets.starbucks.com/assets/f4fd128c834643fa8c74f4ae9f579013.jpg?" alt="icelatte" className="rounded-t-3xl row-end-1 row-span-2"/>
              }
              <p className="text-end mt-[-20px] mr-[8px] text-gray-200/90 text-[0.6rem] z-20 font-mono">RM 10</p>
              <p className="text-center row-start-2 row-span-1 row-end-3 text-xs font-mono">Latte</p>
              <div className="flex justify-center row-start-4 row-end-5 pb-4">
                <button value="hotDrinks" onClick={drinksTempHandler} className="px-[0.6rem] py-1 text-white rounded-full bg-emerald-900 hover:bg-gradient-to-r from-orange-500 to-red-600 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">H</button>
                <button value="coldDrinks" onClick={drinksTempHandler} className="px-[0.6rem] py-1 text-white rounded-full ml-2 bg-emerald-900 hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">C</button>
              </div>
            </div>

            {/* mocha */}
            <div className="bg-gray-300/60 rounded-3xl grid grid-rows-3 grid-flow-col h-[18rem] lg:h-[30rem] transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
              { drinksTemp === "hotDrinks" ?
              <img src="https://globalassets.starbucks.com/assets/915736da018842e788147f7eab73db73.jpg?" alt="hotmocha" className="rounded-t-3xl row-end-1 row-span-2"/>
              :
              <img src="https://globalassets.starbucks.com/assets/0360378c6e774cc3a38d870fc75d5462.jpg?" alt="icedmocha" className="rounded-t-3xl row-end-1 row-span-2"/>
              }
              <p className="text-end mt-[-20px] mr-[8px] text-gray-200/90 text-[0.6rem] z-20 font-mono">RM 11</p>
              <p className="text-center row-start-2 row-span-1 row-end-3 text-xs font-mono">Mocha</p>
              <div className="flex justify-center row-start-4 row-end-5 pb-4">
                <button value="hotDrinks" onClick={drinksTempHandler} className="px-[0.6rem] py-1 text-white rounded-full bg-emerald-900 hover:bg-gradient-to-r from-orange-500 to-red-600 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">H</button>
                <button value="coldDrinks" onClick={drinksTempHandler} className="px-[0.6rem] py-1 text-white rounded-full ml-2 bg-emerald-900 hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">C</button>
              </div>
            </div>

            {/* caramel macchiato */}
            <div className="bg-gray-300/60 rounded-3xl grid grid-rows-3 grid-flow-col h-[18rem] lg:h-[30rem] transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
              { drinksTemp === "hotDrinks" ?
              <img src="https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg?" alt="hotcaramel" className="rounded-t-3xl row-end-1 row-span-2"/>
              :
              <img src="https://globalassets.starbucks.com/assets/363835b1db024636adeb4089ebb96291.jpg?" alt="icedcaramel" className="rounded-t-3xl row-end-1 row-span-2"/>
              }
              <p className="text-end mt-[-20px] mr-[8px] text-gray-200/90 text-[0.6rem] z-20 font-mono">RM 12</p>
              <p className="text-center row-start-2 row-span-1 row-end-3 text-xs font-mono">Caramel Macchiato</p>
              <div className="flex justify-center row-start-4 row-end-5 pb-4">
                <button value="hotDrinks" onClick={drinksTempHandler} className="px-[0.6rem] py-1 text-white rounded-full bg-emerald-900 hover:bg-gradient-to-r from-orange-500 to-red-600 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">H</button>
                <button value="coldDrinks" onClick={drinksTempHandler} className="px-[0.6rem] py-1 text-white rounded-full ml-2 bg-emerald-900 hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">C</button>
              </div>
            </div>

          </div>

      </div>

{/* Menu Page 2.0*/}
<div className="py-20 bg-emerald-100">
            
  <p>changed variable name, need to do layout and put HC to bottom and flex the container of it</p>
  <div className="grid grid-cols-2 mx-10 lg:mx-[20rem] gap-10">
    {drinksMenu.map((air, index) => (
      <div key={index} className="bg-gray-300/60 rounded-3xl h-[18rem] lg:h-[30rem] transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
        <img src={ air.temp === "hotDrink" ? air.hotPic : air.icedPic} className="rounded-t-3xl"/>
        <div className="flex justify-center text-xs font-mono">
          <span>{air.name}</span>
        </div>
        <div className="flex justify-center">
          <button value="hotDrink" onClick={(event) => drinksMenuHandler(event, index)} className="px-[0.6rem] py-1 text-white rounded-full bg-emerald-900 hover:bg-gradient-to-r from-orange-500 to-red-600 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">H</button>
          <button value="coldDrink" onClick={(event) => drinksMenuHandler(event, index)} className="px-[0.6rem] py-1 text-white rounded-full ml-2 bg-emerald-900 hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">C</button>
        </div>
      </div>
    ))}
  </div>
  
</div>

{/* Testimony Page */}
      <div className="bg-emerald-950/90 py-20">
        {/* Location title */}
        <p className="text-white text-center mt-[-2.2rem] mb-10 font-mono tracking-widest text-lg"> [ reviews ] </p>

        {/* whole layout for the carousell */}
        <div className="mx-10 h-[15rem]">
        
   
        <Slider {...carouselSettings} className="pb-3">
        {/* first container */}
        <div className="rounded-3xl bg-gray-100 py-4 min-w-[11rem] max-w-[20rem] grid grid-rows-4 grid-flow-col">
          {/* each comment 1st-container */}
          <div>
            {/* user container top with stars */}
            <div>
              {/* 1st row info icon and name */}
              <div className="flex gap-x-2 mx-4">
                <FaRegUserCircle className="self-center text-emerald-950/90" />
                <p className="text-emerald-950/90 font-mono text-xs grow text-end">Azrai Naqiuddin</p>
              </div>
              {/* 2nd row info 5 star icon */}
              <div className="flex self-center mx-4 py-2">
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <p className="font-mono text-xs grow text-end mt-[1px] font-bold text-emerald-950/90">5.0</p>
              </div>
            </div>
            {/* 3rd row info comment */}
            <div className="bg-emerald-950/80 rounded-3xl mx-4 font-mono text-sm row-start-2 row-span-4">
              <p className="px-4 py-3 text-xs text-white">kat sini ada jam pasir hihihi, plus a caramel macchiato yang dibuat oleh barista sedap 🥺👍👍</p>
            </div>
          </div>
        </div>

        {/* spacer container 1-2 & 2-3 */}
        <div></div>

        {/* second container */}
        <div className="rounded-3xl bg-gray-100 min-h-[14.5rem] py-4 ml-[-3.5rem] lg:ml-[-2.5rem] min-w-[11rem] max-w-[20rem] grid grid-rows-4 grid-flow-col">
          {/* each comment 2nd-container */}
          <div>
            {/* user container top with stars */}
            <div>
              {/* 1st row info icon and name */}
              <div className="flex gap-x-2 mx-4 ">
                <FaRegUserCircle className="self-center text-emerald-950/90" />
                <p className="text-emerald-950/90 font-mono text-xs grow text-end">Danial Syafiq</p>
              </div>
              {/* 2nd row info 5 star icon */}
              <div className="flex self-center mx-4 py-2">
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <p className="font-mono text-xs grow text-end mt-[1px] font-bold text-emerald-950/90">5.0</p>
              </div>
            </div>
            {/* 3rd row info comment */}
            <div className="bg-emerald-950/80 min-h-[9.5rem] rounded-3xl mx-4 font-mono text-sm row-start-2 row-span-4">
              <p className="px-4 py-3 text-xs text-white">Great coffee. The barista was very knowledgeable about his coffee</p>
            </div>
          </div>
        </div>

        {/* third container */}
        <div className="rounded-3xl bg-gray-100 min-h-[14.5rem] py-4 ml-[2rem] min-w-[11rem] max-w-[20rem] grid grid-rows-4 grid-flow-col">
          {/* each comment 3rd-container */}
          <div>
            {/* user container top with stars */}
            <div>
              {/* 1st row info icon and name */}
              <div className="flex gap-x-2 mx-4 ">
                <FaRegUserCircle className="self-center text-emerald-950/90" />
                <p className="text-emerald-950/90 font-mono text-xs grow text-end">Hafiz Ahmad</p>
              </div>
              {/* 2nd row info 5 star icon */}
              <div className="flex self-center mx-4 py-2">
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <p className="font-mono text-xs grow text-end mt-[1px] font-bold text-emerald-950/90">5.0</p>
              </div>
            </div>
            {/* 3rd row info comment */}
            <div className="bg-emerald-950/80 min-h-[9.5rem] rounded-3xl mx-4 font-mono text-sm row-start-2 row-span-4">
              <p className="px-4 py-3 text-xs text-white">A good place to hangout at nite. Tiptop service & very friendly employee. Serve light food.</p>
            </div>
          </div>
        </div>

        {/* spacer container 3-4 & 4-5 */}
        <div></div>

        {/* fourth container */}
        <div className="rounded-3xl bg-gray-100 min-h-[14.5rem] py-4 ml-[-1.3rem] min-w-[11rem] max-w-[20rem] grid grid-rows-4 grid-flow-col">
          {/* each comment 4th-container */}
          <div>
            {/* user container top with stars */}
            <div>
              {/* 1st row info icon and name */}
              <div className="flex gap-x-2 mx-4 ">
                <FaRegUserCircle className="self-center text-emerald-950/90" />
                <p className="text-emerald-950/90 font-mono text-xs grow text-end">GIBS Eco Resort</p>
              </div>
              {/* 2nd row info 5 star icon */}
              <div className="flex self-center mx-4 py-2">
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <p className="font-mono text-xs grow text-end mt-[1px] font-bold text-emerald-950/90">5.0</p>
              </div>
            </div>
            {/* 3rd row info comment */}
            <div className="bg-emerald-950/80 min-h-[9.5rem] rounded-3xl mx-4 font-mono text-sm row-start-2 row-span-4">
              <p className="px-4 py-3 text-xs text-white">Kopi diorg mmg sedappp,</p>
            </div>
          </div>
        </div>

        {/* fifth container */}
        <div className="rounded-3xl bg-gray-100 min-h-[14.5rem] py-4 ml-[3.8rem] min-w-[11rem] max-w-[20rem] grid grid-rows-4 grid-flow-col">
          {/* each comment 5th-container */}
          <div>
            {/* user container top with stars */}
            <div>
              {/* 1st row info icon and name */}
              <div className="flex gap-x-2 mx-4">
                <FaRegUserCircle className="self-center text-emerald-950/90" />
                <p className="text-emerald-950/90 font-mono text-xs text-end">Uncle Roger</p>
              </div>
              {/* 2nd row info 5 star icon */}
              <div className="flex self-center mx-4 py-2">
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <p className="font-mono text-xs grow text-end mt-[1px] font-bold text-emerald-950/90">5.0</p>
              </div>
            </div>
            {/* 3rd row info comment */}
            <div className="bg-emerald-950/80 min-h-[9.5rem] rounded-3xl mx-4 font-mono text-sm row-start-2 row-span-4">
              <p className="px-4 py-3 text-xs text-white">Sedap, harga berpatutan, selesa</p>
            </div>
          </div>
        </div>

        {/* spacer container 5-1 */}
        <div></div>
        
      </Slider>

        </div>
      </div>

      <p className="text-white text-center">----------------------------</p>

{/* Socials Page */}
      <div className="bg-white py-20">
         {/* Location title */}
        <p className="text-center mt-[-2.2rem] mb-10 font-mono tracking-widest text-lg"> [ socials ] </p>


        <div className="flex justify-center gap-x-[5rem] h-[5rem]">
          <div className=" flex justify-items-center">
            <a href="https://www.instagram.com/coffeeandkicks.xyz/" target="_blank">
              <button className="text-emerald-950"><FaInstagram /></button>
            </a>
          </div>
          <div className=" flex justify-items-center">
            <a href="https://www.tiktok.com/@coffeeandkicks.xyz" target="_blank">
              <button className="text-emerald-950"><FaTiktok /></button>
            </a>
          </div>
          <div className=" flex justify-items-center">
            <a href="https://twitter.com/coffeeandkicksx/" target="_blank">
              <button className="text-emerald-950"><FaTwitter /></button>
            </a>
          </div>
        </div>
      </div>
{/* just adding a footer for now - need to adjust later */}

    <div className="bg-emerald-950/90 pt-10 pb-20">
      {/* <AppDescription /> */}

      {/* Website Header */}
      <div className="flex justify-center bg-white rounded-3xl mx-10 pr-2 lg:mx-[20rem] transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
        <img
          className="h-[7rem] rounded-3xl"
          src={
            "https://cdn.pentas.io/next-s3-uploads/55a71fe2-14a2-4544-a912-030d47d36bb7/IMG_R_0008.JPG"
          }
          alt="logoTitle"
        />
          <div className="self-center">
            <p className="self-center text-lg font-mono text-black font-bold tracking-widest">
              coffee and kicks
            </p>
            <div className="flex mt-[0.1rem]">
            <p className="grow self-center text-xs font-mono tracking-widest">
              caffeine near me
            </p>
            <p className="mr-2 scale-75"><FaTiktok /></p>
            <p className="scale-75"><FaInstagram /></p>
            </div>
          </div>
      </div>

    </div>

    </div>
  );
}

export default App;
