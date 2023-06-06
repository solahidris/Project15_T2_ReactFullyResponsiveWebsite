import React from "react";
import { useState } from "react";

const Menu = ( { menuLocation } ) => {

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

    return (
        <div className="py-20 bg-emerald-100/20">
            <p
                id="menuId"
                ref={menuLocation}
                className="text-center mt-[-2.2rem] mb-10 font-mono tracking-widest text-lg"
            >
                {" "}
                [ menu ]{" "}
            </p>
            <div className="grid grid-cols-2 gap-10 mx-10 md:mx-[13rem] lg:mx-[16rem]">
                {drinksMenu.map((air, index) => (
                <div
                    key={index}
                    className="flex-col bg-gray-300/60 rounded-3xl transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500"
                >
                    <div className="flex justify-center bg-[#1f3933] rounded-t-3xl">
                    <img
                        src={air.temp === "hotDrink" ? air.hotPic : air.icedPic}
                        alt=""
                        className="rounded-t-3xl min-h-[150px] min-w-[150px] max-h-[300px] max-w-[300px]"
                    />
                    </div>
                    <p className="text-end mt-[-20px] mr-[8px] text-gray-200/90 text-[0.6rem] z-20 font-mono">
                    {air.temp === "hotDrink" ? air.hotPrice : air.icedPrice}
                    </p>
                    <div className="flex justify-center py-8 text-xs font-mono">
                    <span>{air.name}</span>
                    </div>
                    <div className="flex justify-center pb-8">
                    <button
                        value="hotDrink"
                        onClick={(event) => drinksMenuHandler(event, index)}
                        className="px-[0.6rem] py-1 text-white rounded-full bg-emerald-900 hover:bg-gradient-to-r from-orange-500 to-red-600 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500"
                    >
                        H
                    </button>
                    <button
                        value="coldDrink"
                        onClick={(event) => drinksMenuHandler(event, index)}
                        className="px-[0.6rem] py-1 text-white rounded-full ml-2 bg-emerald-900 hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500"
                    >
                        C
                    </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;