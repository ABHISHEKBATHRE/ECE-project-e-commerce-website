import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addcard, addcart} from '../../features/Cartslice'
import { NavLink } from 'react-router-dom'
const Card = (props) => {
  const dispatch=useDispatch();
  const car={
    img:props.link,
    title:props.title,
    des:props.des,
    price:props.price,
  }
  const handlecard=()=>{
    dispatch(addcard(car));
  }
  const cart={
    img:props.link,
    title:props.title,
    des:props.des,
    price:props.price,
    quan:1,
}
  const handleadd=()=>{
dispatch(addcart(cart))
  }
  return (
    <div className='container lg:w-1/6 w-1/2 min-h-86 m-2 bg-orange-900 rounded-xl relative border border-black'>
      <img className="size-fit rounded-xl h-56 w-full" src={props.link} alt="" />
      <div className="box flex flex-col items-center justify-center">
        <div className="b1 mt-2 font-bold text-xl underline">
      <h1>{props.title}</h1>
      </div> 
      <div className="b2 w-full m-2 p-2 font-bold">
      <h3>{props.des}</h3>
      </div>
      </div>
      <div className="price font-bold text-xl text-center p-2">
        <h2>{`Rs ${props.price} /-`}</h2>
      </div>
      <div className="tem flex text-center justify-around mb-2 w-full">
      <NavLink to="/buy" className='bg-orange-800 text-orange-200 rounded-xl p-2 font-bold border border-black ' onClick={handlecard}>Buy</NavLink>
    <button className='bg-orange-800 text-orange-200 rounded-xl p-2 font-bold border border-black' onClick={handleadd}>Add to card</button>
    </div>
    </div>
  )
}

export default Card
