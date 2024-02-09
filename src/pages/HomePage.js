import CodeBlocks from "../components/CodeBlocks";
import HighlightText from "./HighlightText";
import "../index.css";
import React from 'react'
import Navbar from "../components/Navbar";
import Banner from "../assets/banner.mp4";

const HomePage = () => {
  return (
         
   <div className="flex flex-col bg-black text-white gap-3">
         <Navbar/>
   <div className="bg-gray-800 p-3">

 
           {/* Heading */}
           <div className="text-center text-3xl font-semibold">
          Empower Your Future with
          <HighlightText text={"Our Courses"} />
        </div>

        {/* Sub Heading */}
        <div className="mt-2 ml-16 flex justify-center w-[90%] text-center text-lg text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

          {/* Video */}
        <div className=" w-[95%] h-[400px] ml-10 mx-3 mt-5 ">
          <video
           
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>


     </div>



         <div className=" bg-gray-800 text-white h-[80vh] mt-16">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>
        <footer className="bg-bgDark py-4 text-white flex justify-around items-center">CopyRight &copy; Shivani Sethiya. All Rights Reserved 2024. </footer>
   </div>


     


 
  )
}

export default HomePage