import React from 'react'
import { Link } from 'react-router-dom'
import HomePage from '../pages/HomePage'
const Navbar = () => {
  return (
    <div className='sticky top-0'>
      <div className="bg-bgDark py-4 text-white flex justify-around items-center">
        <Link to="/" className="text-3xl font-bold text-white">Top Courses</Link>
        <div className='flex gap-8'>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
      
        <Link to="/dashboard">DashBoard</Link>

        </div>
        <div className='gap-10 flex'>
        <Link to="/">Login</Link>
        <Link to="/">SignUp</Link>

        </div>
       
      </div>
    </div>
  )
}

export default Navbar
