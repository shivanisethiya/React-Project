import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
    let course = props.course;
  
  return (
    <div>
        <div  className='w-[400px] bg-gray-600 bg-opacity-80 rounded-md overflow-hidden h-[400px]'>
        <Link to={`/courses/${course.id}/${props.category}`} >
        <div className='relative'>
           <img src={course.image.url}/>
        </div>
        

        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>
                    {
                        course.description.length >170 ? 
                        (course.description.substr(0,170)) + "..." :
                        (course.description)
                    }
            </p>
        </div>
        </Link>
    </div>
    
    </div>
    
  )
}

export default Card
