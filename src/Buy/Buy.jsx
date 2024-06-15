import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Buy = () => {
   const card=useSelector((state)=>(state.cart.card)) 
  return (
    <div className='bg-slate-400 text-black h-[calc(100vh-320px)] lg:h-[69vh] overflow-hidden'>
        <h2>
            <NavLink to="/" className="font-bold">{`<-Go back` }</NavLink>
        </h2>
        <div className="container flex gap-40 ml-4 ">
            <div className="image">
            <img className='w-[40vw] h-[60vh] rounded-xl border border-black border-[3px ]' src={card.img} alt="" />
            </div>
            <div className="content flex flex-col justify-between ">
            <div className="b1 flex flex-col gap-5 ">
                <div className="ti font-bold text-3xl">
                  <h1>{card.title}</h1>
                </div>
                <div className="des font-bold text-xl">
                <h2>{card.des}</h2>
                </div>
                <pre className="addr text-xl bg-gray-400 p-4">
                {`Address:
                Maulana Azad National Institute of Technology,
                 BHOPAL,462003`}
                </pre>
                </div>
                <div className="pri font-bold text-xl rounded-xl flex justify-between">
                <h2 className='text-5xl'>{`Rs ${card.price} /-` }</h2>
                <h2 className='bg-slate-950 text-white rounded-3xl p-4'>{`Go to payment->` }</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Buy