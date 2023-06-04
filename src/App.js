import "./App.css";
// import AppDescription from "./components/AppDescription";
import { FaTiktok, FaInstagram, FaTwitter, GiRoundStar } from 'react-icons/fa';
import { FaRegUserCircle, FaStar } from 'react-icons/fa';
import { RxDotsHorizontal } from "react-icons/rx";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import maphardcode from "./map_hardcode.png";
import { useState } from "react";
import { useRef } from "react";
import ReactDOM from 'react-dom';
import ReviewTemplate from "./components/ReviewTemplate";

//https://react-icons.github.io/react-icons (icons website)
// ctrl shift L to pick all same

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
  const reviewData = [
    {user: "Azrai Naqiuddin", comment: "kat sini ada jam pasir hihihi, plus a caramel macchiato yang dibuat oleh barista sedap 🥺👍👍"}, 
    {user: "Danial Syafiq", comment: "Great coffee. The barista was very knowledgeable about his coffee"}, 
    {user: "Nailah", comment: "Fuyoo. Kedai ni cool sangat. Ada Ong. kedekkedek Ong. kedekkedek"}, 
    {user: "Hafiz Ahmad", comment: "A good place to hangout at nite. Tiptop service & very friendly employee. Serve light food."}, 
    {user: "Uncle Roger", comment: "Sedap, harga berpatutan, selesa"}
  ];

  // Google Map API Key
  // const apiKey = process.env.REACT_APP_GOOGLEMAP_API_KEY; // (not in use)
  const apiKeyGmaps = process.env.REACT_APP_GOOGLEMAP_API_KEY_MAP_A;

  // Review Carousel - can export to component later
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
        <img className="h-[7rem] rounded-3xl" alt="logoTitle" src={"https://cdn.pentas.io/next-s3-uploads/55a71fe2-14a2-4544-a912-030d47d36bb7/IMG_R_0008.JPG"}/>
          <div className="self-center">
            <p className="self-center text-lg font-mono text-black font-bold tracking-widest">coffee and kicks</p>
            <div className="flex mt-[0.1rem]">
              <p className="grow self-center text-xs font-mono tracking-widest">caffeine near me</p>
              <p className="mr-2 scale-75"><FaTiktok /></p>
              <p className="scale-75"><FaInstagram /></p>
            </div>
          </div>
      </div>

{/* Navbar Header */}
 {/* scroll to function working - need to map this to simplify code */}
      <div className="bg-gray-100 py-3 mt-10 mb-20 mx-10 lg:mx-[20rem] gap-x-5 rounded-3xl flex justify-center font-mono text-xs transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
        <button onClick={()=>{const node = ReactDOM.findDOMNode(homeLocation.current); window.scrollTo(({top: node.offsetTop, behavior:"smooth"}))}} className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">home</button>
        <button onClick={()=>{const node = ReactDOM.findDOMNode(locationLocation.current); window.scrollTo({top:node.offsetTop, behavior:"smooth"})}} className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">location</button>
        <button onClick={()=>{const node = ReactDOM.findDOMNode(menuLocation.current); window.scrollTo({top: node.offsetTop, behavior:"smooth"})}} className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">menu</button>
        <button onClick={()=>{const node = ReactDOM.findDOMNode(reviewLocation.current); window.scrollTo({top:node.offsetTop, behavior:"smooth"})}} className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">reviews</button>
        <button onClick={()=>{const node = ReactDOM.findDOMNode(socialsLocation.current); window.scrollTo({top: node.offsetTop, behavior:"smooth"})}} className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">socials</button>
      </div>


{/* Reviews Page 2.0*/}
<div className="py-20 bg-emerald-700">
  <div className="pb-5 bg-emerald-800 mx-10 gap-x-10 flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
    {reviewData.map((review, index) => (
      <div key={index} className="">
        <div className="rounded-3xl bg-gray-100 py-4 min-w-[11rem] max-w-[20rem] max-h-[300px] lg:max-h-[400px] grid grid-rows-4 grid-flow-col font-mono"> 
          <div> {/* each comment 1st-container */}
            <div> {/* user container top with stars */}     
              <div className="flex gap-x-2 mx-4"> {/* 1st row info icon and name */}
                <FaRegUserCircle className="self-center text-emerald-950/90" />
                <p className="text-emerald-950/90 text-xs grow text-end">{review.user}</p>
              </div>
              <div className="flex self-center mx-4 py-2"> {/* 2nd row info 5 star icon */}
                <FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" />
                <p className="text-xs grow text-end mt-[1px] font-bold text-emerald-950/90">5.0</p>
              </div>
            </div>
            <div className="bg-emerald-950/80 rounded-3xl mx-4 text-sm row-start-2 row-span-4"> {/* 3rd row info comment */}
                <p className="px-4 py-3 text-xs text-white">{review.comment}</p>
            </div>
          </div>
        </div>
      </div>    
    ))}
  </div>
  <div className="text-center">
    <p className="tracking-[1rem] text-3xl text-gray-200 font-bold">.....</p>
  </div>
</div>


      

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
              <img src={ air.temp === "hotDrink" ? air.hotPic : air.icedPic} className="rounded-t-3xl min-h-[150px] min-w-[150px] max-h-[300px] max-w-[300px]"/>
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


{/* Reviews Page */}
      <div className="bg-emerald-950/90 py-20">
        {/* Location title */}
        <p id="reviewsId" ref={reviewLocation} className="text-white text-center mt-[-2.2rem] mb-10 font-mono tracking-widest text-lg"> [ reviews ] </p>

        {/* whole layout for the carousell */}
        <div className="mx-10 h-[15rem]">
        
        {/* Container Item in Carousell Template */}
         
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
        <p id="socialsId" ref={socialsLocation} className="text-center mt-[-2.2rem] mb-10 font-mono tracking-widest text-lg"> [ socials ] </p>


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
