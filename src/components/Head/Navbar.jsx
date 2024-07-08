import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import {NavLink,Link } from 'react-router-dom'
const Navbar = () => {
 
  const totalquan=useSelector((state)=>state.cart.totalquan)
  return (
  <nav className='w-screen lg:h-14 h-28 p-2 flex lg:flex-row flex-col justify-between  bg-slate-600  border-[2px] border-black items-center '>
    <div className="b1 flex gap-10 items-center lg:w-1/2 w-full lg:justify-normal justify-between">
<div className="logo">
    <Link to="/">
    <img className='h-10 w-12 rounded-full' src="src\components\Head\prologo.png" alt="" />
     </Link>
    
</div>
<div className="search lg:w-1/2 w-3/4">
  <input className='w-full h-6 rounded-lg bg-slate-300 text-black' type="text" name="" id="" placeholder='Search here' />
</div>
</div>
<ul className='flex gap-8 ml-3 items-center'>
    <li><NavLink to="/" className={({isActive})=>`${isActive ? "text-black" : "text-slate-200"} text-xl font-bold hover:underline`} >Home</NavLink></li>
    <li><NavLink to="/cart" className={({isActive})=>`${isActive ? "text-black" : "text-slate-200"} text-xl font-bold hover:underline `} >Cart({totalquan})</NavLink></li>
    <li><NavLink to="/about" className={({isActive})=>`${isActive ? "text-black" : "text-slate-200"} text-xl font-bold hover:underline `} >About</NavLink></li>
    <li><NavLink to="/contact" className={({isActive})=>`${isActive ? "text-black" : "text-slate-200"} text-xl font-bold hover:underline `} >Contact</NavLink></li>
    
    
</ul>
  </nav>
  )
}

export default Navbar
 