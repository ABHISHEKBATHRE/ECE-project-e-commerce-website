import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import {NavLink,Link } from 'react-router-dom'
const Navbar = () => {
 
  const totalquan=useSelector((state)=>state.cart.totalquan)
  return (
  <nav className='w-screen lg:h-14 h-28 p-2 flex lg:flex-row flex-col justify-between  bg-orange-900 border border-[4px] border-orange-950 items-center '>
    <div className="b1 flex gap-10 items-center lg:w-1/2 w-full lg:justify-normal justify-between">
<div className="logo">
    <Link to="/">
    <img className='h-10 w-12 rounded-full' src="src\components\Head\prologo.png" alt="" />
     </Link>
    
</div>
<div className="search lg:w-1/2 w-3/4">
  <input className='w-full h-6 rounded-lg bg-amber-950 text-orange-300' type="text" name="" id="" placeholder='Search here' />
</div>
</div>
<ul className='flex gap-8 ml-3 items-center'>
    <li><NavLink to="/" className={({isActive})=>`${isActive ? "text-orange-300" : "text-white"} text-xl font-bold hover:underline`} >Home</NavLink></li>
    <li><NavLink to="/cart" className={({isActive})=>`${isActive ? "text-orange-300" : "text-white"} text-xl font-bold hover:underline `} >Cart({totalquan})</NavLink></li>
    <li><NavLink to="/about" className={({isActive})=>`${isActive ? "text-orange-300" : "text-white"} text-xl font-bold hover:underline `} >About</NavLink></li>
    <li><NavLink to="/contact" className={({isActive})=>`${isActive ? "text-orange-300" : "text-white"} text-xl font-bold hover:underline `} >Contact</NavLink></li>
    
    
</ul>
  </nav>
  )
}

export default Navbar
 