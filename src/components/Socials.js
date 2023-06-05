import React from "react";
import { FaTiktok, FaInstagram, FaTwitter } from 'react-icons/fa';

const Socials = ({ socialsLocation }) => {
    return (
        <div className="bg-white py-20">
            <p id="socialsId" ref={socialsLocation} className="text-center mt-[-2.2rem] mb-10 font-mono tracking-widest text-lg"> [ socials ] </p>

            <div className="flex justify-center h-[10rem]">
            <div className="flex gap-x-[5rem] lg:gap-x-[10rem] items-stretch">
                <div className="self-center">
                <a href="https://www.instagram.com/coffeeandkicks.xyz/" target="_blank">
                    <button className="text-emerald-950"><FaInstagram /></button>
                </a>
                </div>
                <div className="self-center">
                <a href="https://www.tiktok.com/@coffeeandkicks.xyz" target="_blank">
                    <button className="text-emerald-950"><FaTiktok /></button>
                </a>
                </div>
                <div className="self-center">
                <a href="https://twitter.com/coffeeandkicksx/" target="_blank">
                    <button className="text-emerald-950"><FaTwitter /></button>
                </a>
                </div>
            </div>

            </div>
        </div>
    )
};

export default Socials;