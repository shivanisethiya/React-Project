import React from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import { filterData } from './data'
// import Spinner from './components/Spinner'
import Cards from './components/Cards'
import { filter } from './data2'
import { useState,useEffect } from "react";
import HomePage from './pages/HomePage'

const Home = () => {

  // const [filteredCourses, setFilteredCourses] = useState(filter[0].data);
  const [inputText, setInputText] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(filter[0].data);

  let inputHandler = (e) => {
    // Convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);

    // Filter courses based on the input text for title or author
    const filtered = filter[0].data[category].filter(
      (course) =>
        course.title.toLowerCase().includes(lowerCase) ||
        course.Createdby.toLowerCase().includes(lowerCase)
    );

    setFilteredCourses(filtered);
    console.log(filteredCourses)
  };
    const [category, setCategory] = useState(filterData[0].title);
  return (
    <div>
          <div className="min-h-screen flex flex-col bg-black gap-4">
      <div>
        <Navbar/>
      </div>

      {/* <HomePage></HomePage> */}

      <div className="bg-gray-800">
        <div>
          <Filter 
          filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
          <div className='flex justify-center mb-4'>
          <form>
          <input type='text' placeholder='search here' className='p-1 rounded-md '  onChange={inputHandler}/>
          <input type='submit' value="search"  className={`text-center text-[13px] sm:text-[16px] p-1 px-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]
         hover:shadow-none hover:scale-95 transition-all duration-200 bg-white ml-3`}/>
          </form>
         
          </div>
        
        </div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {/* {
            loading ? (<Spinner/>) : (<Cards courses={filter[0].data} category={category}/>)
          } */}
          <Cards courses={filter[0].data} category={category}/>
        </div>
      </div>
    

    </div>
    </div>
  )
}

export default Home