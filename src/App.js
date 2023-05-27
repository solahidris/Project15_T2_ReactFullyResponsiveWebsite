import "./App.css";
import AppDescription from "./components/AppDescription";

function App() {
  // Google Map API Key
  const apiKey = process.env.REACT_APP_GOOGLEMAP_API_KEY;
  const apiKeyGmaps = process.env.REACT_APP_GOOGLEMAP_API_KEY_MAP_A;

  return (
    <div className="bg-gray-300/60 h-screen pt-10 pb-20">
      {/* <AppDescription /> */}

{/* Website Header */}
      <div className="flex justify-center bg-white rounded-3xl mx-10 lg:mx-[20rem] transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
        <img
          className="h-[7rem]"
          src={
            "https://cdn.pentas.io/next-s3-uploads/55a71fe2-14a2-4544-a912-030d47d36bb7/IMG_R_0008.JPG"
          }
          alt="logoTitle"
        />
        <div className="self-center">
          <p className="self-center text-2xl font-mono text-black font-bold tracking-widest">
            coffee and kicks
          </p>
          <p className="self-center text-xs font-mono text-black tracking-widest">
            caffeine near me
          </p>
        </div>
      </div>

{/* Navbar Header */}
      <div className="bg-gray-100 py-3 mt-10 mb-20 mx-10 lg:mx-[20rem] gap-x-5 rounded-3xl flex justify-center font-mono text-xs transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
        <button className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">home</button>
        <button className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">location</button>
        {/* <button>article</button> */}
        <button className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">menu</button>
        <button className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">testimony</button>
        <button className="hover:font-bold transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-300">socials</button>
      </div>

{/* Home Page */}
      <div className="bg-gray-100 px-10 lg:px-[20rem] py-5">
  {/* home title */}
      <p className="text-center pt-[1rem] mb-[-2.75rem] font-mono tracking-widest text-lg"> [ home ]  </p>
        
        <div className="bg-gray-200 my-20 py-10 px-5 text-center font-mono text-xs rounded-3xl transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
          <p>We believe in a simple formula,</p>
          <p className="my-5 rounded-3xl py-5 px-2 font-bold text-base bg-white ">Good (Coffee + Beans + Company) = Good Times</p>
          <p className="pb-5">
            And we aim to give you just that while still main a sustainable
            business on the side
          </p>
          <p className="italic">So enjoy your cuppa. Coffee up!</p>
        </div>
      </div>

{/* Location Page */}
    <div className="bg-white">
  
      <div className="bg-gray-300/60 px-[10rem] py-[5rem] lg:px-[20rem]">
        {/* Location title */}
        <p className="text-center mt-[-2.2rem] mb-10 font-mono tracking-widest text-lg"> [ location ]  </p>
          {/* Google Maps API Pin */}
          <div className="transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
            <div className="flex justify-center py-2">
              <iframe
                width="1200"
                height="350"
                className="border:0 rounded-3xl"
                loading="lazy"
                allowfullscreen
                src={apiKeyGmaps}
              ></iframe>
            </div>
            {/* Text below Gmaps */}
            <p className="font-mono text-xs font-bold text-center">
              📍 Hirup Cafe Seksyen 9
            </p>
          </div>
      </div>

    </div>

{/* Menu Page */}
      <div className="py-20">

        {/* menu title */}
        <p className="text-center mt-[-2.2rem] mb-10 font-mono tracking-widest text-lg"> [ menu ]  </p>
          {/* 4 menu grid container */}
          <div className="grid grid-cols-2 gap-10 mx-10 lg:mx-[20rem]">

            {/* americano */}
            <div className="bg-gray-300/60 rounded-3xl grid grid-rows-3 grid-flow-col h-[18rem] lg:h-[30rem] transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
              <img src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?" className="rounded-t-3xl row-end-1 row-span-2"/>
              <p className="text-center row-start-2 row-span-1 row-end-3 text-xs font-mono">americano</p>
              <div className="flex justify-center row-start-4 row-end-5 pb-4">
                <button className="px-[0.6rem] py-1 text-white rounded-full bg-emerald-900 hover:bg-gradient-to-r from-orange-500 to-red-600 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">H</button>
                <button className="px-[0.6rem] py-1 text-white rounded-full ml-2 bg-emerald-900 hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">C</button>
              </div>
            </div>

            {/* latte  */}
            <div className="bg-gray-300/60 rounded-3xl grid grid-rows-3 grid-flow-col h-[18rem] lg:h-[30rem] transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
              <img src="https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?" className="rounded-t-3xl row-end-1 row-span-2"/>
              <p className="text-center row-start-2 row-span-1 row-end-3 text-xs font-mono">latte</p>
              <div className="flex justify-center row-start-4 row-end-5 pb-4">
                <button className="px-[0.6rem] py-1 text-white rounded-full bg-emerald-900 hover:bg-gradient-to-r from-orange-500 to-red-600 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">H</button>
                <button className="px-[0.6rem] py-1 text-white rounded-full ml-2 bg-emerald-900 hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">C</button>
              </div>
            </div>

            {/* mocha */}
            <div className="bg-gray-300/60 rounded-3xl grid grid-rows-3 grid-flow-col h-[18rem] lg:h-[30rem] transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
              <img src="https://globalassets.starbucks.com/assets/915736da018842e788147f7eab73db73.jpg?" className="rounded-t-3xl row-end-1 row-span-2"/>
              <p className="text-center row-start-2 row-span-1 row-end-3 text-xs font-mono">mocha</p>
              <div className="flex justify-center row-start-4 row-end-5 pb-4">
                <button className="px-[0.6rem] py-1 text-white rounded-full bg-emerald-900 hover:bg-gradient-to-r from-orange-500 to-red-600 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">H</button>
                <button className="px-[0.6rem] py-1 text-white rounded-full ml-2 bg-emerald-900 hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">C</button>
              </div>
            </div>

            {/* caramel macchiato */}
            <div className="bg-gray-300/60 rounded-3xl grid grid-rows-3 grid-flow-col h-[18rem] lg:h-[30rem] transition ease-in-out hover:-translate-center-1 hover:scale-105 duration-500">
              <img src="https://globalassets.starbucks.com/assets/58db701349cb48738069e8c912e2b3ac.jpg?" className="rounded-t-3xl row-end-1 row-span-2"/>
              <p className="text-center row-start-2 row-span-1 row-end-3 text-xs font-mono">caramel macchiato</p>
              <div className="flex justify-center row-start-4 row-end-5 pb-4">
                <button className="px-[0.6rem] py-1 text-white rounded-full bg-emerald-900 hover:bg-gradient-to-r from-orange-500 to-red-600 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">H</button>
                <button className="px-[0.6rem] py-1 text-white rounded-full ml-2 bg-emerald-900 hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition ease-in-out hover:-translate-center-1 hover:scale-110 duration-500">C</button>
              </div>
            </div>

          </div>

      </div>

{/* Testimony Page */}
      <div className="bg-gray-100 py-10">
          <p className="text-center">this is the testimony carosell</p>
      </div>

      <p className="text-white text-center">----------------------------</p>

{/* Socials Page */}
      <div className="bg-white py-10">
         <p className="text-center">this is the socials page</p>
      </div>


    </div>
  );
}

export default App;
