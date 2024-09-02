
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";


import {  Link } from 'react-router-dom';
import { signOutUserAction } from "../../pages/user_signIn_signUp/userAction.js";



export const  Header=()=> {
  const dispatch= useDispatch()
  const {user}= useSelector((state)=>state.userInfo)



  return (
    <div className="header">
   <Link to ="/">
        <img className="logo" src="https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png" alt="" />
        </Link>
<div className="search">
  <input type="text" />
  <FaSearch className="serach-icon"/>
 
</div>

<div className="options">
  {user?._id ? (<><div className="link">

<span className="top"
>Hello, {user.fname} {user.lname}
<Link to="/" onClick={()=> dispatch(signOutUserAction(user.email))} className="signout">
<FaSignOutAlt />
</Link>

</span>
<span className="bottom">Account & Lists</span>

</div></>) : (<>
    <div className="link">

<span className="top"
>Hello, sign in
<Link to="/signin">
<FaCaretRight />
</Link>

</span>
<span className="bottom">Account & Lists</span>

</div></>)
  
  }

<div className="link">

    <span className="top">Returns</span>

    <span className="bottom">& Orders</span>

</div>
<div className="cart">

    <span className="top">
    <FaShoppingCart  className="basket"/>
    </span>

    <span className="bottom">Basket</span>

</div>
</div>

      
    </div>
  );
}

