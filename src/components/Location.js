import React from "react";
import maphardcode from "../assets/map_hardcode.png";
import { motion } from "framer-motion";

const Location = ( { locationLocation } ) => {
  return (
    <div className="bg-emerald-950/90 py-20">
      <p
        id="locationId"
        ref={locationLocation}
        className="text-white text-center mb-10 font-mono tracking-widest text-lg"
      >
        {" "}
        [ location ]{" "}
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
      <a href="https://goo.gl/maps/URHa9eLMsTkaY6BD6">
        <div className="transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
          <div className="flex justify-center">
            <img
              src={maphardcode}
              alt=""
              className="object-contain max-w-[200px] lg:max-w-[400px]"
            />
          </div>
          <div className="font-mono text-white">
            <p className="text-xs font-bold text-center mx-[20%] my-2">
              📍 Coffee and Kicks
            </p>
            <p className="text-[10px] text-center mx-[30%]">
              44, Jalan Tengku Ampuan Zabedah A 9/A, Seksyen 9, 40100 Shah Alam,
              Selangor
            </p>
          </div>
        </div>
      </a>
      </motion.div>
    </div>
  );
};

export default Location;
