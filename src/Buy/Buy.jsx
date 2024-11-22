import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Buy = () => {
   const card=useSelector((state)=>(state.cart.card)) 
  return (
    <div className='bg-slate-200 text-black h-[calc(100vh-320px)] lg:h-[69vh] overflow-hidden'>
        <h2>
            <NavLink to="/" className="font-bold">{`<-Go back` }</NavLink>
        </h2>
        <div className="container flex gap-80 ml-4 ">
            <div className="image">
            <img className='w-[30vw] h-[50vh] rounded-xl border-[3px ]' src={card.img} alt="" />
            </div>
            <div className="content flex flex-col justify-between ">
            <div className="b1 flex flex-col gap-3 ">
                <div className="ti font-bold text-2xl text-zinc-800">
                  <h1>{card.title}</h1>
                </div>
                <div className="des text-xl">
                <h2>{card.des}</h2>
                </div>
                <label className='text-xl font-bold'>Address</label>
                <textarea name="" id="" placeholder='Please write your address' className='h-20 p-2 rounded-xl bg-slate-200 text-xl text-zinc-900' ></textarea>
                </div>
                <div className="pri font-bold text-xl rounded-xl flex justify-between">
                <h2 className='text-2xl'>{`Rs ${card.price} /-` }</h2>
                <NavLink to="/payment" className='bg-zinc-900 text-slate-300 rounded-3xl p-2'>{`Go to payment->` }</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Buy