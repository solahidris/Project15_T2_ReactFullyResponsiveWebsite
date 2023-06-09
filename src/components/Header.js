import React from 'react';
import { motion } from "framer-motion";

  const Header = ( { homeLocation, locationLocation, menuLocation, reviewLocation, socialsLocation}) => {
    
    const handleButtonClick = (ref) => {
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>

        <div className="bg-gray-100 py-3 mt-10 mb-20 mx-10 lg:mx-[20rem] rounded-3xl flex justify-center font-mono text-xs transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
          <button onClick={() => handleButtonClick(homeLocation)} className="px-2 hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">home</button>
          <button onClick={() => handleButtonClick(locationLocation)} className="px-2 hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">location</button>
          <button onClick={() => handleButtonClick(menuLocation)} className="px-2 hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">menu</button>
          <button onClick={() => handleButtonClick(reviewLocation)} className="px-2 hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">reviews</button>
          <button onClick={() => handleButtonClick(socialsLocation)} className="px-2 hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">socials</button>          
        </div>
      
      </motion.div>
    );
};

export default Header;
