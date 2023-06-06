import React from "react";

const Home = ( { homeLocation } ) => {
  return (
    <div className="bg-gray-100 px-10 lg:px-[20rem] py-20">
      {/* home title */}
      <p
        id="homeId"
        ref={homeLocation}
        className="text-center font-mono tracking-widest text-lg"
      >
        {" "}
        [ home ]{" "}
      </p>

      <div className="bg-emerald-950/90 text-white mt-10 mb-20 py-10 px-5 text-center font-mono text-xs rounded-3xl transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
        <p>We believe in a simple formula,</p>
        <p className="mt-6 text-black rounded-t-3xl pt-5 pb-1 px-2 font-bold text-base bg-white ">
          Good Coffee + Good Kicks =
        </p>
        <p className="mb-6 mt-[-0.1rem] text-black rounded-b-3xl pb-5 pt-1 px-2 font-bold text-base bg-white ">
          Good Times
        </p>
        <p className="italic">So enjoy your cuppa. Coffee up!</p>
      </div>
    </div>
  );
};

export default Home;