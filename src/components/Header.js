import React, { useRef } from 'react';

const Header = ( { homeLocation, locationLocation, menuLocation, reviewLocation, socialsLocation}) => {

  const handleButtonClick = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-100 py-3 mt-10 mb-20 mx-10 lg:mx-[20rem] gap-x-5 rounded-3xl flex justify-center font-mono text-xs transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
      <button onClick={() => handleButtonClick(homeLocation)} className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">home</button>
      <button onClick={() => handleButtonClick(locationLocation)} className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">location</button>
      <button onClick={() => handleButtonClick(menuLocation)} className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">menu</button>
      <button onClick={() => handleButtonClick(reviewLocation)} className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">reviews</button>
      <button onClick={() => handleButtonClick(socialsLocation)} className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">socials</button>

      {/* Place the respective sections or components you want to scroll to */}
      
    </div>
  );
};

export default Header;
