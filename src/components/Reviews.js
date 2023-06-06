import React from "react";
import { useState, useRef } from "react";
import { FaRegUserCircle, FaStar } from 'react-icons/fa';

const Reviews = ( { reviewLocation } ) => {
    const reviewData = [
        {user: "Azrai Naqiuddin", comment: "kat sini ada jam pasir hihihi, plus a caramel macchiato yang dibuat oleh barista sedap 🥺👍👍"}, 
        {user: "Danial Syafiq", comment: "Great coffee. The barista was very knowledgeable about his coffee"}, 
        {user: "Nailah", comment: "Fuyoo. Kedai ni cool sangat. Ada Ong. kedekkedek Ong. kedekkedek"}, 
        {user: "Hafiz Ahmad", comment: "A good place to hangout at nite. Tiptop service & very friendly employee. Serve light food."}, 
        {user: "Uncle Roger", comment: "Sedap, harga berpatutan, selesa"}
      ];

    const [scrollPosition, setScrollPosition] = useState(0);
    const carouselRef = useRef(null);
    
  return (
    <div className="py-20 bg-emerald-950/90">
      <p
        id="reviewsId"
        ref={reviewLocation}
        className="text-white text-center mb-10 font-mono tracking-widest text-lg"
      >
        {" "}
        [ reviews ]{" "}
      </p>

      <div
        ref={carouselRef}
        onScroll={() => setScrollPosition(carouselRef.current.scrollLeft)}
        className="pb-5 mx-10 md:mx-[13rem] lg:mx-[16rem] gap-x-10 flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300"
      >
        {reviewData.map((review, index) => (
          <div key={index} className="" style={{ scrollLeft: scrollPosition }}>
            <div className="rounded-3xl bg-gray-100 py-4 min-w-[11rem] max-w-[20rem] max-h-[300px] lg:max-h-[350px] grid grid-rows-4 grid-flow-col font-mono">
              <div>
                <div>
                  {" "}
                  {/* user container top with stars */}
                  <div className="flex gap-x-2 mx-4">
                    {" "}
                    {/* 1st row info icon and name */}
                    <FaRegUserCircle className="self-center text-emerald-950/90" />
                    <p className="text-emerald-950/90 text-xs grow text-end">
                      {review.user}
                    </p>
                  </div>
                  <div className="flex self-center mx-4 py-2">
                    {" "}
                    {/* 2nd row info 5 star icon */}
                    <FaStar className="text-yellow-300" />
                    <FaStar className="text-yellow-300" />
                    <FaStar className="text-yellow-300" />
                    <FaStar className="text-yellow-300" />
                    <FaStar className="text-yellow-300" />
                    <p className="text-xs grow text-end mt-[1px] font-bold text-emerald-950/90">
                      5.0
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-950/80 rounded-3xl text-sm mt-4 mx-4 h-[200px] lg:h-[200px] row-start-2 row-span-4">
                  {" "}
                  {/* 3rd row info comment */}
                  <p className="px-4 py-3 text-xs text-white">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[8px] text-center mt-[-15px]">
                {index + 1} / {reviewData.length}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="tracking-[1rem] text-3xl text-gray-200 font-bold">
          .....
        </p>
      </div>
    </div>
  );
};

export default Reviews;
