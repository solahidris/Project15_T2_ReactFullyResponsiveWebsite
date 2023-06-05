import React from "react";
import { FaTiktok, FaInstagram } from 'react-icons/fa';


const LogoHeaderFooter = () => {
    return(
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
    )
};

export default LogoHeaderFooter;