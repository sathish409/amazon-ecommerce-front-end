import { getAllCatIdProducts, getAllProducts, getOneProduct } from "../../helpers/axiosHelper"
import { setAProduct, setCartList, setProductList, setSearchProduct } from "./Productslice"



export const getAllProductAction= ()=>async(dispatch)=>{

    const ProductList= await getAllProducts()
   const {status, products} = ProductList
    if(status ==="success"){
   dispatch(setProductList(products))
    }
}
export const getCatIdProductsAction= (obj)=>async(dispatch)=>{

    const ProductList= await getAllCatIdProducts(obj)
    console.log(ProductList)
   const {status, list} = ProductList
    if(status ==="success"){
   dispatch(setSearchProduct(list))
    }
}

export const getAProductAction= (_id)=>async(dispatch)=>{

    const Product= await getOneProduct(_id)
   const {status, products} = Product
    if(status ==="success"){
   dispatch(setAProduct(products))
    }
}

export const postToCart= (product)=>async(dispatch)=>{
console.log(product)
   dispatch(setCartList(product))
}