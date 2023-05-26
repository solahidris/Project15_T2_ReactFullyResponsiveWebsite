import "./App.css";
import AppDescription from "./components/AppDescription";

function App() {
  // Google Map API Key
  const apiKey = process.env.REACT_APP_GOOGLEMAP_API_KEY;

  return (
    <div className="bg-gray-800 h-screen py-2">
      <AppDescription />

      {/* Website Header */}
      <div className="flex justify-center bg-white">
        <img
          className="h-[10rem]"
          src={
            "https://cdn.pentas.io/next-s3-uploads/55a71fe2-14a2-4544-a912-030d47d36bb7/IMG_R_0008.JPG"
          }
          alt="logoTitle"
        />
        <p className="self-center text-2xl font-mono text-black font-bold lowercase tracking-widest">
          Coffee and Kicks
        </p>
      </div>

      {/* Navbar Header */}
      <div className="bg-black font-mono text-xs text-white flex justify-center py-4">
        <button>home |</button>
        <button>| location |</button>
        <button>| article |</button>
        <button>| testimony |</button>
        <button>| menu |</button>
        <button>| socials</button>
      </div>

      {/* Home Page */}
      <div className="bg-white">
        <p className="text-center">this is home - start</p>
        <p>we sell coffee</p>
        <p className="text-center">this is home - end</p>
      </div>

      <p className="text-white text-center">----------------------------</p>

      {/* Location Page */}
      <div className="bg-white">
        <p className="text-center">this is location - start</p>
        <iframe
          src="https://storage.googleapis.com/maps-solutions-o9dzper1p0/locator-plus/nf0r/locator-plus.html"
          width="100%"
          height="100%"
          className="border:0; h-[50rem] w-[100%] px-10"
          loading="lazy"
        ></iframe>
        <p>this is a location map</p>
        <p className="text-center">this is location - end</p>
      </div>

      <p className="text-white text-center">----------------------------</p>
    </div>
  );
}

export default App;
