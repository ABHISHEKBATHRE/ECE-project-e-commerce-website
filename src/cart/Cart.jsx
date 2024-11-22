import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {decrement, increment, removecart } from '../features/Cartslice';
import { NavLink } from 'react-router-dom';

const Cart = () => {

    const allcarts=useSelector((state)=>state.cart.carts);
    const totalprice=useSelector((state)=>state.cart.totalprice)
    const dispatch=useDispatch();
    const handleminus=(cart)=>{
        if(cart.quan==1)
        {   
            dispatch(removecart(cart.id));

        }
        else{
        dispatch(decrement(cart.id))}
    }
return (
    <div className='bg-slate-200'>
    <h1 className='text-3xl font-bold text-center tracking-tight mb-2'>CARTS ITEMS</h1>
    <ul className='overflow-y-auto h-[62.5vh] flex flex-col items-center '>
        {
            allcarts.map((cart)=>(
                <li className='border-[2px] rounded-xl bg-zinc-800 text-slate-300 mb-2 p-4 flex justify-between items-center w-11/12 ' key={cart.id}>
                    <img className='w-[40px] h-[40px] rounded-lg' src={cart.img} alt="" />
                    <div className="box w-1/3">
                  <div className="b1 font-bold text-xl ">
                       {cart.title}
                       </div>
                       <div className="b2">
                       {cart.des}
                       </div>
                    </div>
                    <button className='font-bold text-4xl' onClick={()=>{
                        dispatch(removecart(cart.id))

                    }}><img src="src\images\icons8-delete-30.png" alt="delete-02" width="24" height="24" /></button>
                    <div className="m1 font-bold text-xl">
                        {`Rs ${cart.price*cart.quan}/-` }
                    </div>
                    <div className="b3">
                        <h1>Quantity</h1>
                        <div className="b4 flex gap-6">
                    <button  onClick={()=>handleminus(cart)}>-</button>
                    <div className="b5">{cart.quan}</div>
<button onClick={()=>dispatch(increment(cart.id))}>+</button>
</div>
</div>
 </li>
            ))
        }
        <li className='bg-zinc-800 text-slate-300 p-4 text-xl font-bold  relative left-[36vw] border-black border-[1px] rounded-2xl'>{`Total Cart Value: Rs ${totalprice}/-`}</li>
        <li><NavLink to='/payment' className='bg-zinc-800 text-slate-300 rounded-3xl p-4 relative left-[36vw] mt-4  border-black border-[1px]'>{`Go to payment->` }</NavLink></li>
    </ul>
    
    </div>
  )
}

export default Cart