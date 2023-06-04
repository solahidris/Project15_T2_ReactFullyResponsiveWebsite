import React from "react";
import { FaRegUserCircle, FaStar } from 'react-icons/fa';

const ReviewTemplate = () => {

    const reviewData = [
        {user: "Azrai Naqiuddin", comment: "kat sini ada jam pasir hihihi, plus a caramel macchiato yang dibuat oleh barista sedap 🥺👍👍"}, 
        {user: "Danial Syafiq", comment: "Great coffee. The barista was very knowledgeable about his coffee"}, 
        {user: "Nailah", comment: "Fuyoo. Kedai ni cool sangat. Ada Ong. kedekkedek Ong. kedekkedek"}, 
        {user: "Hafiz Ahmad", comment: "A good place to hangout at nite. Tiptop service & very friendly employee. Serve light food."}, 
        {user: "Uncle Roger", comment: "Sedap, harga berpatutan, selesa"}
      ];

    return(
    <div className="rounded-3xl bg-gray-100 py-4 min-w-[11rem] max-w-[20rem] grid grid-rows-4 grid-flow-col font-mono"> 
        <div> {/* each comment 1st-container */}
        <div> {/* user container top with stars */}     
            <div className="flex gap-x-2 mx-4"> {/* 1st row info icon and name */}
            <FaRegUserCircle className="self-center text-emerald-950/90" />
            <p className="text-emerald-950/90 text-xs grow text-end">{reviewData[0].user}</p>
            </div>
            <div className="flex self-center mx-4 py-2"> {/* 2nd row info 5 star icon */}
            <FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" />
            <p className="text-xs grow text-end mt-[1px] font-bold text-emerald-950/90">5.0</p>
            </div>
        </div>
        <div className="bg-emerald-950/80 rounded-3xl mx-4 text-sm row-start-2 row-span-4"> {/* 3rd row info comment */}
            <p className="px-4 py-3 text-xs text-white">{reviewData[0].comment}</p>
        </div>
        </div>
    </div>
    )
};

export default ReviewTemplate;