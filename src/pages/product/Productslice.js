import {createSlice} from '@reduxjs/toolkit'


const initialState ={
    productList:[],
    product:{},
    cartList: [],
    
}

const productSlice= createSlice({
      name:"productList",
      initialState,
    reducers:{

        setProductList:(state, {payload=[]})=>{
            state.productList = payload;
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
            price,
            productquantity:payload.qty,
            producttype,
            productname,
            thumbnail,
            discount,
           

         }
            state.cartList.push(item)
       
        
          
        }
    }
})

const {reducer, actions} =  productSlice;

export const {setProductList, setAProduct, setCartList}= actions;
 export default reducer;

