import { getAllCategories } from "../../helpers/axiosHelper"
import { setCatList } from "./categoryslice"


export const getAllcategoryAction= ()=>async(dispatch)=>{

    const catList= await getAllCategories()
   const {status, categories} = catList
    if(status ==="success"){
   dispatch(setCatList(categories))
    }
}