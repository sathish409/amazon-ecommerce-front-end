import { getNewAccessJWT, getUser, signOutSellerUser } from "../../helpers/axiosHelper";
import { setUser } from "./userSlice";

export const getUserAction = () => async (dispatch) => {
   const { status, user } = await getUser();

  if (status === "success") {
    // send user to the store
    dispatch(setUser(user));
  }
};
export const signOutUserAction = (email) => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT")

   dispatch(setUser({}))
  
  sessionStorage.removeItem("accessJWT")
   localStorage.removeItem("refreshJWT")


   await signOutSellerUser({email, accessJWT });
};

export const autoLogin=()=>async(dispatch)=>{
  const accessJWT = sessionStorage.getItem("accessJWT")
  const refreshJWT = localStorage.getItem("refreshJWT")

  if (!accessJWT && refreshJWT){
    const response = await getNewAccessJWT()
    console.log(response)
    if(response?.accessJWT){
     sessionStorage.setItem("accessJWT", response.accessJWT)
     dispatch(getUserAction())
    }
  }
dispatch(getUserAction())
  
}
