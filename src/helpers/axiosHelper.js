
import axios from 'axios'

const rootEP = process.env.REACT_APP_ROOTAPI 
const userEP = rootEP + "/users";
const categoryEP = rootEP + "/categories";
const productEP = rootEP + "/products";



const getAccessJWT=() => sessionStorage.getItem("accessJWT" )
const getRefreshJWT=() => localStorage.getItem("refreshJWT" )


const axiosProcessor=async(obj)=>{
const {isPrivate , refreshToken} = obj
if(isPrivate){
    obj.headers ={ 
        Authorization: refreshToken ? 
        getRefreshJWT() : getAccessJWT()

    }
}
    try {
        const resp =await axios(obj)
        return resp.data
        console.log(resp)
    } catch (error) {

        const errorMsg = error?.response?.data?.message;
        if(errorMsg?.includes("jwt expired")){
            //get new access token
            const {accessJWT} = await getNewAccessJWT()
            if(accessJWT){
                sessionStorage.setItem("accessJWT", accessJWT)
                return axiosProcessor(obj)
            }
        }
   return{
    status:"error",
    message: error.message,
   }
    }
}

export const postSellerUser=async(data)=>{

    return axiosProcessor({
        method: "post",
        url: userEP + "/seller",
        data,
      });

}

export const signInSellerUser=async(data)=>{

    return axiosProcessor({
        method: "post",
        url: userEP + "/signin",
        data,
      });

}
export const signOutSellerUser=async(data)=>{

    return axiosProcessor({
        method: "post",
        url: userEP + "/signout",
       data,
      });

}
export const getUser = async()=>{

    return axiosProcessor({
        method: "get",
        url: userEP,
        isPrivate: true,
      });

}

export const getNewAccessJWT=async()=>{

    return axiosProcessor({
        method: "get",
        url: userEP + "/get-accessjwt" ,
        isPrivate: true,
        refreshToken: true,
      });

}

export const verifyUserEmail=async(data)=>{

    return axiosProcessor({
        method: "post",
        url: userEP + "/verify-email" ,
       data,
      });

}
export const requestOtp=async(email)=>{

    return axiosProcessor({
        method: "post",
        url: userEP + "/request-opt" ,
        data:{
            email,
        }
      });

}
export const resetPassword=async(data)=>{

    return axiosProcessor({
        method: "patch",
        url: userEP ,
        data,
      });

}

export const changePassword=async(data)=>{

    return axiosProcessor({
        method: "patch",
        url: userEP + "/password",
        isPrivate:true,
        data,
      });

}


export const postCategory=async(data)=>{

    return axiosProcessor({
        method: "post",
        url: categoryEP,
        isPrivate: true,
        data,
      });

}

export const getAllCategories=async()=>{

    return axiosProcessor({
        method: "get",
        url: categoryEP,
        isPrivate: true,
      });

}
export const postProduct=async(data)=>{

    return axiosProcessor({
        method: "post",
        url: productEP,
        isPrivate: true,
        data,
      });

}

export const getAllProducts=async()=>{

    return axiosProcessor({
        method: "get",
        url: productEP,
        isPrivate: true,
      });

}
export const getOneProduct=async(_id)=>{

    return axiosProcessor({
        method: "get",
        url: productEP + "/" + _id,
        isPrivate: true,
      });

}