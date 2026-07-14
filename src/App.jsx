import { useState } from "react";
import "@fontsource/cinzel/700.css";
import "@fontsource/great-vibes";
import "./index.css";

import { FaLocationDot } from "react-icons/fa6";

import Timer from "./Timer";

import firstImg from "./assets/image1.png";
import secImg from "./assets/image2.png";
import thirdImg from "./assets/image3.png";
import fourthImg from "./assets/image4.png";
import fifthImg from "./assets/image5.png";
import sixthImg from "./assets/image6.png";
import seventhImg from "./assets/image7.png";


function App() {
  return (
    <>
      <div className="sec1 flex justify-center ">
        <img src={firstImg} alt="" />
      </div>

      <div className="sec2 flex justify-center">
        <img src={secImg} alt="" />
      </div>

      <div className="sec3 flex justify-center ">
        <img src={thirdImg} alt="" />
      </div>

      <div className="countdown flex justify-center font-['Cinzel']   tracking-wider text-green-900 mt-5 text-4xl md:text-6xl lg:text-[200px] font-bold  ">
        <Timer duration={826 * 24 * 60 * 60 * 1000} />
      </div>

      <div className="sec3 flex justify-center ">
        <img src={fourthImg} alt="" />
      </div>

      <a
        className="flex justify-center mt-2 "
        href="https://www.google.com/maps/search/?api=1&query=Emerald+Banquet+Hall+Tower+Plot+No+IID+EK+Street+Number+692+AA+II+Action+Area+IID+Newtown+West+Bengal+700161"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="bg-[#cca300] gap-2 text-white   px-4 py-2
    sm:px-5 sm:py-2.5
    md:px-6 md:py-3 rounded-xl flex justify-center cursor-pointer "
        >
          <div className="loc flex justify-center  items-center ">
            <FaLocationDot />
          </div>
          VIEW LOCATION
        </button>
      </a>

      <div className="sec3 flex justify-center ">
        <img src={fifthImg} alt="" />
      </div>

         <div className="sec3 flex justify-center ">
     <img src={sixthImg} alt="" />
   </div>

          <div className="sec3 flex justify-center ">
   <img src={seventhImg} alt="" />
 </div>
    </>
  );
}

export default App;
