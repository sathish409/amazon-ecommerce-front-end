import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    productList:[],
    product:{}
    
}

const productSlice= createSlice({
      name:"productList",
      initialState,
    reducers:{
        setProductList:(state, {payload=[]})=>{
            state.productList = payload;
        },
        setAProduct:(state, {payload={}})=>{
            state.product = payload
        }
    }
})

const {reducer, actions} =  productSlice;

export const {setProductList, setAProduct}= actions;
 export default reducer;

