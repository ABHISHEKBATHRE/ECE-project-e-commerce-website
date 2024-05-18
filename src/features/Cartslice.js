import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    carts:[],
   totalquan:0,
}
export const Cartslice=createSlice({
    name:'cart',
    initialState,
    reducers:{
addcart:(state,action)=>{
    let find=state.carts.findIndex((cart)=>(cart.title===action.payload.title))
if(find>=0){
    state.carts[find].quan+=1;
    state.totalquan+=1
}
else{
const cart={
    id:nanoid(),
   img:action.payload.img,
   title:action.payload.title,
   des:action.payload.des,
   quan:action.payload.quan,
}
state.carts.push(cart)
state.totalquan+=1
}
},
    removecart:(state,action)=>{
        state.carts=state.carts.filter((cart)=>(cart.id!==action.payload))
    }
    ,
    increment:(state,action)=>{
       let find=state.carts.findIndex((cart)=>(cart.id===action.payload))
       state.carts[find].quan+=1;
       state.totalquan+=1
    },
    decrement:(state,action)=>{
        let find=state.carts.findIndex((cart)=>(cart.id===action.payload))
        if( state.carts[find].quan>0)
        {
       state.carts[find].quan-=1;
       state.totalquan-=1;
        }
     },
    }
})
export const {addcart,removecart,increment,decrement}=Cartslice.actions
export default Cartslice.reducer