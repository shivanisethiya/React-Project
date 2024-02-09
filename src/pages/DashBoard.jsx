import React from "react"
import Navbar from "../components/Navbar"
import profile from "../assets/profie.webp"
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Enrolled from "./Enrolled";
function DashBoard() {
  

  return (
    <div className=" bg-black h-full">

    <Navbar/>
    <div className="flex gap-3">
    <div>
          {/* <---My profile.---> */}
          <div className=" bg-gray-800 text-white w-[50vw] p-4 m-3 rounded-xl">
                 <Link to="/"  className={` w-fit flex gap-3 justify-center items-center text-center text-[13px] bg-white text-black sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_shadow-sky-300] hover:shadow-sky-300 hover:scale-95 transition-all duration-200 `}>
                 <FaArrowCircleLeft />
                 Back</Link>
                  <h1 className="text-center text-3xl font-bold m-3">My Profile</h1>
                  
                <div className="flex flex-col justify-center items-center gap-5">
                   <img src={profile} width={100} ></img>
                   <div className="flex gap-5">
                   <button className={` w-fit flex gap-3 justify-center items-center text-center text-[13px] bg-yellow-500 text-black sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_shadow-sky-300] hover:shadow-sky-300 hover:scale-95 transition-all duration-200 `}>Change</button>
                   <button className={` w-fit flex gap-3 justify-center items-center text-center text-[13px] bg-white text-black sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_shadow-sky-300] hover:shadow-sky-300 hover:scale-95 transition-all duration-200 `}>Remove</button>
                   </div>
                
                </div>

                </div>
 {/* <-----form ----> */}
 <div className="flex justify-center  w-[50vw] bg-gray-800 rounded-xl p-7 m-3 ">
 {/* <div className=" bg-gray-800 text-white w-[50vw] p-7 m-3 rounded-xl gap-3 flex flex-col">                   */}
 <div className="  text-white m-3  gap-3 flex flex-col">  

                  <p className="text-xl font-semibold">Profile information</p>
                       <div className="flex gap-4">
                         <div>
                               <p>Name</p>
                             <input type="text" value="Shivani" className="text-black bg-gray-200 rounded-sm px-3 font-semibold" readOnly></input>
                             
                         </div>

                         <div>
                         <p>Profession</p>
                             <input type="text" value="Developer" className="text-black bg-gray-200 rounded-sm px-3 font-semibold" readOnly></input>
                         </div>
                         
                            
                       </div>
                       <div className="flex gap-14">
                        
                          <div>
                            <p>Date of Birth</p>
                             <input type="date" value="29-08-2002" className="text-black bg-gray-200 rounded-sm px-3 font-semibold" ></input>
                           </div>
                           <div>
                             <p>Gender</p>
                             <div className="flex gap-4">
                             <input type="radio" value="female" name="gender" checked/>Female   
                             
                             <input type="radio" value="male" name="gender" />male 
                             </div>
                                </div>
                          
                       </div>
                       <p>About</p>
                       <div>
                             
                             <textarea rows={5} cols={50} value="I am a Frontend Developer and proficient in MERN stack .  " className="text-black bg-gray-200 rounded-md p-3  font-semibold"></textarea>
                       </div>

                 </div>
</div>
    </div> 
 
                 
                 
      <Enrolled/>
     

      </div>
    </div>
  )
}

export default DashBoard