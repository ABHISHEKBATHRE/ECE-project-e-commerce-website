import React from 'react'
import { NavLink } from 'react-router-dom'
const Payment = () => {
  return (
    <div className='h-[calc(100vh-320px)] lg:h-[69vh] p-1 bg-slate-300'>
        <form>
            <div className="box font-bold flex flex-col bg-slate-500 border-[4px] w-1/4 gap-7 h-96 m-auto  rounded-2xl justify-center border-black">
   <div className="b1 flex gap-4 ">
            <input type="radio" className='cursor-pointer ml-32' name="payment" id="1" />
            <label htmlFor="1">UPI</label>
            </div>
            <div className="b2 flex gap-4 ">
            <input type="radio" className='cursor-pointer ml-32'  name="payment" id="2" />
            <label htmlFor="2">Debit Card</label>
            </div>
            <div className="b3 flex gap-4 ">
            <input type="radio"  className='cursor-pointer ml-32' name="payment" id="3" />
            <label htmlFor="3">Credit Card</label>
            </div>
            <div className="b4 flex gap-4 ">
            <input type="radio"  className='cursor-pointer ml-32' name="payment" id="4" />
            <label htmlFor="4">Net Banking</label>
            </div>
            </div>
            
        </form>
        <div className="b5 flex">
        <NavLink className="flex justify-center items-center font-bold m-auto w-1/4 border-[3px] mt-5 p-2 rounded-xl bg-slate-600">{`Proceed for Payments`}</NavLink>
        <NavLink to="/" className="flex justify-center items-center font-bold m-auto w-1/4 border-[3px] p-2 rounded-xl bg-slate-600">{`Cancel Transaction`}</NavLink>
        </div>
    </div>
  )
}

export default Payment