import {createSlice} from '@reduxjs/toolkit'


const initialState ={
    productList:[],
    product:{},
    cartList: [],
    searchProduct:[],
    reviewsList:[],

    
}

const productSlice= createSlice({
      name:"productList",
      initialState,
    reducers:{

        setProductList:(state, {payload=[]})=>{
            state.productList = payload;
        },
        setSearchProduct:(state, {payload=[]})=>{
            state.searchProduct = payload;
        },
        setAProduct:(state, {payload={}})=>{
            state.product=payload
                
        },
        setCartList:(state, {payload})=>{
            console.log(payload)
            ///payload will have, id and quantity
            //cart list [] = {id: , price: , quantity}
            //1. get product from state.product using id
          const {_id, discount, price,producttype, productname, images} = payload.product
          const itemPrice = price*(1 - discount / 100)*payload.qty;
         const item  = {
            _id,
            images,
            discountPrice:itemPrice ,
            price:price,
            productquantity:payload.qty,
            producttype,
            productname,
            discount,
           

         }
    
         const existingItem = state.cartList.find((product)=>product._id === item._id)
         if(existingItem){
            existingItem.productquantity += 1;
         }
         else{
            state.cartList.push({...item, productquantity:1})
         }
         
       
        
          
        },
          setDeleteProduct:(state, {payload})=>{
            console.log(payload)
            ///payload will have, id and quantity
            //cart list [] = {id: , price: , quantity}
            //1. get product from state.product using id
          
       const newCartItems = state.cartList.filter((product) => product._id !== payload._id);
         
       state.cartList = newCartItems
        
          
        },
        setIncrementProduct:(state, {payload})=>{
            console.log(payload)
            const item = state.cartList.find((product)=>product._id === payload._id)
            if(item){
                item.productquantity += payload.qty || 1
            }

        },
        setDecrementProduct:(state, {payload})=>{
            console.log(payload)
            const item = state.cartList.find((product)=>product._id === payload._id)
            if(item){
                item.productquantity -= payload.qty || 1
            }

        },

        setReviewsList:(state, {payload=[]})=>{
            console.log(payload)
            state.reviewsList=payload
                
        },
        clearCart(state) {
            console.log("clearCart reducer called—state before:", state.cartList);
      state.cartList = [];
    },
        
    }
})

const {reducer, actions} =  productSlice;

export const {clearCart,setDeleteProduct, setProductList, setAProduct, setCartList, setSearchProduct, setReviewsList, setIncrementProduct, setDecrementProduct}= actions;
 export default reducer;

