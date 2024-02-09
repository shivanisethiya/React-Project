import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { AiOutlineGlobal } from "react-icons/ai";
import { filter } from "../data2";
import ProgressBar from "react-bootstrap/ProgressBar";
import web from "../assets/web.png";
import simage from "../assets/simage.avif";
import Dimage from "../assets/Dimage.jpg";
import { FaEllipsisH } from "react-icons/fa";
import { useState } from "react";
import { PiDotsThreeOutlineVerticalDuotone } from "react-icons/pi";

const Enrolled = () => {
  //    const course=filter[0].data['Development'];
  const course = filter[0].data["Development"];
  const [showMarkAsCompleted, setShowMarkAsCompleted] = useState(false);
  const [showMarkAsCompleted1, setShowMarkAsCompleted1] = useState(false);
  const [showMarkAsCompleted2, setShowMarkAsCompleted2] = useState(false);
  const handleToggleButton = () => {
    setShowMarkAsCompleted(!showMarkAsCompleted);
  };
  const handleToggleButton1 = () => {
     setShowMarkAsCompleted1(!showMarkAsCompleted1);
   };
   const handleToggleButton2 = () => {
     setShowMarkAsCompleted2(!showMarkAsCompleted2);
   };
  console.log(course);
  return (
    <div className="text-white flex flex-col items-center p-3 m-3 gap-3 w-[100%]">
      <h1
        className={`w-full flex justify-center items-center text-2xl bg-gray-200 text-black px-6 py-1 rounded-md font-bold shadow-[2px_2px_0px_0px_shadow-sky-300] hover:shadow-sky-300 hover:scale-95 transition-all duration-200 `}
      >
        Enrolled Courses
      </h1>

      <div className="flex gap-10 w-[100%]  border-b-2 bg-gray-700 mt-5  px-3 py-1">
        <div className="w-[50%] border-r-2"> Course Name </div>
        <div className="w-[24%]  border-r-2"> Due Date </div>
        <div className="w-[33%]  "> Progress </div>
      </div>

      <div className="flex justify-evenly w-[100%] -mt-3 ">
        <div className="flex flex-col justify-center gap-10 w-[42%] border-r-2">
          <div className="flex text-md items-center pt-8">
            <img
              src={web}
              className=" rounded-full aspect-square w-[35px] object-contain border-2"
            ></img>
            <div className="flex justify-center items-center">
              {course[0].title}
            </div>
          </div>
          <div className="flex text-md">
            <img
              src={Dimage}
              className=" rounded-full aspect-square w-[35px] object-contain border-2"
            ></img>
            <div className="flex justify-center items-center">
              {course[1].title}
            </div>
          </div>
          <div className="flex text-md">
            <img
              src={simage}
              className=" rounded-full aspect-square w-[35px] object-contain border-2"
            ></img>
            <div className="flex justify-center items-center">
              {course[2].title}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 w-[25%]  border-r-2 pt-20 items-center ">
          <div> 02-2025 </div>
          <div> 07-2026 </div>
          <div> 09-2027 </div>
        </div>

        <div className="flex flex-col justify-center pt-14 pl-3 gap-10 w-[33%]">

         {/* <-----first---> */}

        <div className="flex w-[100%]">

          
<div className="bg-white border-white w-[90%] h-[50%] rounded-3xl">
  
  <ProgressBar
    className="bg-blue-400  pl-3 w-[60%] h-[100%] text-black rounded-3xl"
    now={60}
    label={`60%`}
  />
  </div>
  <div className="flex text-md pb-8 pl-2 pt-1 relative text-white">
<PiDotsThreeOutlineVerticalDuotone 
      className="cursor-pointer "
      onClick={handleToggleButton}
    />
    {showMarkAsCompleted && (
      <button className="absolute right-0 text-black bg-white px-3 py-1 mt-10 rounded-md">
        Mark as Completed
      </button>
    )}
  </div>

         </div>

         {/* <---second-- */}
            <div className="flex w-[100%]">

          
          <div className="bg-white border-white w-[90%] h-[50%] rounded-3xl">
            
            <ProgressBar
              className=" bg-yellow-400 pl-3 w-[40%] h-[100%] text-black rounded-3xl"
              now={40}
              label={`40%`}
            />
            </div>
            <div className="flex text-md pb-8 pl-2 pt-1 relative text-white">
<PiDotsThreeOutlineVerticalDuotone 
                className="cursor-pointer "
                onClick={handleToggleButton1}
              />
              {showMarkAsCompleted1 && (
                <button className="absolute right-0 text-black bg-white px-3 py-1 mt-10 rounded-md">
                  Mark as Completed
                </button>
              )}
            </div>

          </div>
          
          {/* <--third;--- */}
       
       
       
          <div className="flex w-[100%]">

          
          <div className="bg-white border-white w-[90%] h-[50%] rounded-3xl">
            
            <ProgressBar
              className=" bg-green-600 pl-3 w-[80%] h-[100%] text-black rounded-3xl"
              now={80}
              label={`80%`}
            />
            </div>
<div className="flex text-md pb-8 pl-2 pt-1 relative text-white">
<PiDotsThreeOutlineVerticalDuotone 
                className="cursor-pointer "
                onClick={handleToggleButton2}
              />
              {showMarkAsCompleted2 && (
                <button className="absolute right-0 text-black bg-white px-3 py-1 mt-10 rounded-md">
                  Mark as Completed
                </button>
              )}
            </div>

          </div>


        </div>
      </div>

      {/* <--second>     */}

      {/* <---third> */}
    </div>
  );
};

export default Enrolled;
