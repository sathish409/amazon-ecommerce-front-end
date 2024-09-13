
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

  const {product} = useSelector((state)=>state.productInfo)

  

  return (
    <div className="header">
      <div className="am-im">
   <Link to ="/">
        <img src="https://m.media-amazon.com/images/I/413Ais4J2uL.jpg" alt="" />
        </Link>
        </div>
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

