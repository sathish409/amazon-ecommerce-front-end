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
          const {_id, discount, price,producttype, productname, thumbnail} = payload.product
          const itemPrice = price*(1 - discount / 100)*payload.qty;
         const item  = {
            _id,
            discountPrice:itemPrice ,
            price:itemPrice,
            productquantity:payload.qty,
            producttype,
            productname,
            thumbnail,
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
        setReviewsList:(state, {payload=[]})=>{
            console.log(payload)
            state.reviewsList=payload
                
        },
        
    }
})

const {reducer, actions} =  productSlice;

export const {setProductList, setAProduct, setCartList, setSearchProduct, setReviewsList}= actions;
 export default reducer;

