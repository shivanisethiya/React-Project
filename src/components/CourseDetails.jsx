import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { AiOutlineGlobal } from "react-icons/ai";
import Navbar from './Navbar';
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSchedule } from "react-icons/md";
import { FaCalendarWeek } from "react-icons/fa6";
import { useState } from 'react';
const CourseDetails = ({ filter }) => {
    const { courseId, category } = useParams();
    const course = filter[0].data[category].find(course => course.id === courseId);
 

    if (!course) {
        return <div>Course not found</div>;
    }

    const [expandedSections, setExpandedSections] = useState([]);

    // Function to toggle the expanded state of a section
    const toggleSection = (sectionIndex) => {
        const newExpandedSections = [...expandedSections];
        newExpandedSections[sectionIndex] = !expandedSections[sectionIndex];
        setExpandedSections(newExpandedSections);
    };

    return (
       
        <div>
                <Navbar></Navbar>
       
         <div className='bg-black  text-white flex gap-20' >
            {/* <-----Details----> */}

                       

                <div className=' w-[90vw] m-5 p-4 ml-10 gap-6'>
                      
                <div className=' bg-gray-800 m-5 p-10 ml-10 rounded-3xl flex flex-col'>
                                  <h1 className=' text-4xl font-semibold m-3'>{course.title}</h1>
                                  <p className='m-3'>{course.description}</p>
                                  <div className='flex m-3 gap-1'>
                                  <p className='  text-yellow-200'>4.5</p>
                                  <div className='flex justify-center items-center'>
                                  <FaStar color='yellow'/>
                                  <FaStar color='yellow' />
                                  <FaStar color='yellow'/>
                                  <FaStar color='yellow' />
                                  <FaStarHalfAlt color='yellow'/>
                                  </div>
                                
                                  
                                  </div>
                                  <div className=' ml-3 flex items-center'>Created by <FaArrowRight /> <i> {course.Createdby} </i> </div>
                                  
                                  
                                  <div className='flex gap-1 items-center m-3'>     <GoInfo size={20} />
                                  Created at {course.created}  <AiOutlineGlobal size={20}/> <p>English</p> </div>

                                  <div className=' ml-3 flex items-center gap-2'><FaLocationDot />{course.Location}</div>
                            
                                  <div className=' ml-3 flex items-center gap-2'><MdOutlineSchedule /> {course.Duration}</div>
                                  <div className=' ml-3 flex items-center gap-2'><FaCalendarWeek /> {course.schedule}</div>
                             <div className='ml-3 flex  flex-col'>
                                <p className='font-bold mt-3 text-yellow-400'>Prerequisites:</p>
                                <p className='text-green-400'>A laptop with a good internet connection.</p>
                                <p className='text-green-400'>Great Enthusiasm to learn.</p>
                                <p className='text-green-400'>2-3 to invest daily.</p>
                                <p className='text-green-400'>Positive Attitude</p>
                             </div>
                                  <div className='ml-3 flex items-center mt-2 gap-2'>Registerations are: <p className='font-bold'>{course.Enrollementstatus}</p> </div>
                                  
                        
                </div>         
{/*syllabus section*/}
               <div className='bg-gray-800 m-5 p-10 ml-10 rounded-3xl flex flex-col'>

            
            <div className="max-w-[830px]">
                <div className="flex flex-col gap-3">
                    <p className="text-[28px] font-semibold">Course Content</p>
                    {course.syllabus.map((section, index) => (
                        <div key={index} className="border-b-2 pb-2">
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection(index)}>
                                <span className="text-lg font-semibold">{section.title}</span>
                                <span>{section.duration}</span>
                            </div>
                            {expandedSections[index] && (
                                <div className="ml-6 mt-2">
                                    {section.subsections.map((subsection, subIndex) => (
                                        <div key={subIndex} className="flex items-center">
                                            <span className="mr-2">&#8226;</span>
                                            <span>{subsection}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
                       
                        
            </div>        

              


          

         
       
                </div>

           {/* <------Add to cart------> */}

           <div className=' w-[50vw] bg-gray-800 h-[80vh] m-5 mt-16 p-4 mr-16 flex flex-col gap-6 rounded-md'>

                 
                  <div>
                     <img src={course.image.url}/>
                </div>
                   <div className=' text-4xl m-4'>Price : {course.price}</div>
                   <div className='flex flex-col gap-5 m-4'>
                   <button 
                    className={`text-lg px-2 py-1 rounded-md font-medium 
            text-black bg-yellow-300 hover:bg-opacity-50 border-2 transition-all duration-300 `}>Add to cart</button>
                   <button
                             className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white  hover:bg-opacity-50 border-2 transition-all duration-300 `}
                   >Buy Now</button> 
                   </div>
                   <div className='flex justify-center'>30 Days money back guarantee</div>
                   

              </div>
        
         </div>


         </div>

    );
};

export default CourseDetails;

