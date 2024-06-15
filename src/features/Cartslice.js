import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    card:{},
    carts:[],
   totalquan:0,
   totalprice:0,
}
export const Cartslice=createSlice({
    name:'cart',
    initialState,
    reducers:{
    addcard:(state,action)=>{
        state.card={
            img:action.payload.img,
            title:action.payload.title,
            price:action.payload.price,
            des:action.payload.des, 
        }
    },
addcart:(state,action)=>{
    let find=state.carts.findIndex((cart)=>(cart.title===action.payload.title))
if(find>=0){
    state.carts[find].quan+=1;
    state.totalquan+=1;
    state.totalprice+=state.carts[find].price;
}
else{
const cart={
    id:nanoid(),
   img:action.payload.img,
   title:action.payload.title,
   price:action.payload.price,
   des:action.payload.des,
   quan:action.payload.quan,
}
state.carts.push(cart);
state.totalquan+=1;
state.totalprice+=action.payload.price;
}
},
    removecart:(state,action)=>{
        let find=state.carts.findIndex((cart)=>(cart.id===action.payload))
        state.totalprice-=(state.carts[find].quan*state.carts[find].price);
        state.totalquan-=state.carts[find].quan;
        state.carts=state.carts.filter((cart)=>(cart.id!==action.payload))
        
    }
    ,
    increment:(state,action)=>{
       let find=state.carts.findIndex((cart)=>(cart.id===action.payload))
       state.carts[find].quan+=1;
       state.totalquan+=1;
       state.totalprice+=state.carts[find].price;
    },
    decrement:(state,action)=>{
        let find=state.carts.findIndex((cart)=>(cart.id===action.payload))
        if( state.carts[find].quan>0)
        {
       state.carts[find].quan-=1;
       state.totalquan-=1;
       state.totalprice-=state.carts[find].price;
        }
     },
    }
})
export const {addcart,removecart,increment,decrement,addcard}=Cartslice.actions
export default Cartslice.reducer