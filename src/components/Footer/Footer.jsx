import React from 'react'

const Footer = () => {
  return (
   <footer className='flex w-screen lg:h-1/4 h-52 absolute bottom-0 bg-zinc-900'>
    <div className="left w-1/2 ">
<img className='h-full' src="src\components\Footer\footimg.png" alt="" />
    </div>
    <div className="right w-1/2">
        <ul className='font-bold flex flex-col text-center text-slate-400 justify-center mt-7'>
            <li className='hover:underline hover:cursor-pointer'>Learn</li>
            <li className='hover:underline hover:cursor-pointer'>Customer Care</li>
            <li className='hover:underline hover:cursor-pointer'>Company Details</li>
            <li className='hover:underline hover:cursor-pointer'>&copy;Copright abhi</li>
        </ul>
    </div>
   </footer>
  )
}

export default Footer
