import React from "react";
import logo from "../logo.svg";

const AppDescription = () => {
  return (
    <div className="text-center text-white">
      <div className="flex justify-center">
        <img src={logo} className="w-[70px] animate-spin" alt="logo" />
      </div>
      <h1 className="text-sm font-mono">React Fully Responsive Website</h1>
      <p className="font-mono text-xs mx-[20%] mt-2">
        Build a fully responsive website using react with multiple pages. The
        website will have various animations and support mobile, desktop, and
        tablet screen sizes.
      </p>
      <p className="">-----------------------</p>
      <p className="font-mono text-xs">website using react</p>
      <p className="font-mono text-xs">with multiple page</p>
      <p className="font-mono text-xs">with various animations</p>
      <p className="font-mono text-xs">support mobile, desktop, tablet size</p>
      <p className="">-----------------------</p>
      <p className="font-mono text-xs">coffee and kicks website</p>
      <p className="font-mono text-xs">article - menu - location - socials</p>
      <p className="font-mono text-xs">aritcle - make blog template</p>
      <p className="font-mono text-xs">menu - add pics in grid and price</p>
      <p className="font-mono text-xs">socials - SM links and preview</p>
      <p className="font-mono text-xs">map - add google maps api?</p>
      <p className="">-----------------------</p>
      <p className="font-mono text-xs">create components</p>
      <p className="font-mono text-xs">one page website</p>
    </div>
  );
};

export default AppDescription;
