import React from "react";
import { FaTiktok, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from "framer-motion";

const Socials = ( { socialsLocation } ) => {
    // just adding a comment here to test
    return (
        <div>
            <div className="bg-white py-20">
                <p id="socialsId" ref={socialsLocation} className="text-center mt-[-2.2rem] mb-10 font-mono tracking-widest text-lg"> [ socials ] </p>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                <div className="flex justify-center h-[10rem]">
                <div className="flex gap-x-[5rem] lg:gap-x-[10rem] items-stretch">
                    <div className="self-center">
                    <a href="https://www.instagram.com/coffeeandkicks.xyz/">
                        <button className="text-emerald-950"><FaInstagram /></button>
                    </a>
                    </div>
                    <div className="self-center">
                    <a href="https://www.tiktok.com/@coffeeandkicks.xyz">
                        <button className="text-emerald-950"><FaTiktok /></button>
                    </a>
                    </div>
                    <div className="self-center">
                    <a href="https://twitter.com/coffeeandkicksx/">
                        <button className="text-emerald-950"><FaTwitter /></button>
                    </a>
                    </div>
                </div>

                </div>
                </motion.div>
            </div>
        </div>
    )
};

export default Socials;