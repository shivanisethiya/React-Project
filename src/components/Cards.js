import React from 'react'
import Card from './Card';
import { useState } from 'react';


const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
  console.log(courses);
    
    function getCourses() {
            return courses[category];      
    }

  return (
    <div className="flex flex-wrap justify-center gap-8 mb-4">
      {
        getCourses().map( (course) => (
            <Card key={course.id} 
            course = {course} 
            category = {category}
            />
            
        ))
      }
    </div>
  )
}

export default Cards
