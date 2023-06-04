import React from "react";

const ReviewTemplate = ( { reviewData.user , reviewData.comment } ) => {
    return(
    <div className="rounded-3xl bg-gray-100 py-4 min-w-[11rem] max-w-[20rem] grid grid-rows-4 grid-flow-col font-mono"> 
        <div> {/* each comment 1st-container */}
        <div> {/* user container top with stars */}     
            <div className="flex gap-x-2 mx-4"> {/* 1st row info icon and name */}
            <FaRegUserCircle className="self-center text-emerald-950/90" />
            <p className="text-emerald-950/90 text-xs grow text-end">{reviewData.user}</p>
            </div>
            <div className="flex self-center mx-4 py-2"> {/* 2nd row info 5 star icon */}
            <FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" />
            <p className="text-xs grow text-end mt-[1px] font-bold text-emerald-950/90">5.0</p>
            </div>
        </div>
        <div className="bg-emerald-950/80 rounded-3xl mx-4 text-sm row-start-2 row-span-4"> {/* 3rd row info comment */}
            <p className="px-4 py-3 text-xs text-white">{reviewData.comment}</p>
        </div>
        </div>
    </div>
    )
};

export default ReviewTemplate;