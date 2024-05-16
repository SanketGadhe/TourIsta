import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  console.log(props.placesData)
  return (
    <div className='py-12 px-10 '>
      <div className="logo float-left text-4xl font-medium"> Tour<span className='text-orange-300'>Ista</span></div>
      <div className='nav float-end '>
      <ul className='flex list-none gap-14 '>
        <NavLink to={'/Home'} className={(e)=>{return e.isActive?'text-xl font-medium text-[#b3dd62] border-[#b3dd62] border-b-4 rounded-sm transition-all ':''}}><li className='hover:text-[#b3dd62] '>Home</li></NavLink>
        <NavLink to={'/Guide'} className={(e)=>{return e.isActive?'text-xl font-medium text-[#b3dd62] border-[#b3dd62] border-b-4 rounded-sm transition-all ':''}}><li className='hover:text-[#b3dd62] '>Virtual Guide</li></NavLink>
        <NavLink to={'/Map'} className={(e)=>{return e.isActive?'text-xl font-medium text-[#b3dd62] border-[#b3dd62] border-b-4 rounded-sm transition-all ':''}}><li className='hover:text-[#b3dd62] '>Map</li></NavLink>
        <NavLink to={'/About'} className={(e)=>{return e.isActive?'text-xl font-medium text-[#b3dd62] border-[#b3dd62] border-b-4 rounded-sm transition-all ':''}}><li className='hover:text-[#b3dd62] '>About Us</li></NavLink>
        <NavLink to={'/Admin'} className={(e)=>{return e.isActive?'text-xl font-medium text-[#b3dd62] border-[#b3dd62] border-b-4 rounded-sm transition-all ':''}}><li className='hover:text-[#b3dd62] '>Admin</li></NavLink>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
