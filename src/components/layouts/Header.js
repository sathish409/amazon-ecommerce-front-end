
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";


import {  Link } from 'react-router-dom';
import { signOutUserAction } from "../../pages/user_signIn_signUp/userAction.js";
import { useEffect, useState } from "react";
import { getCatIdProductsAction } from "../../pages/product/ProductAction.js";
import { getAllcategoryAction } from "../../pages/category/CategoryAction.js";



export const  Header=()=> {
  const [form, setForm] =useState("");
  const dispatch= useDispatch()
  const {user}= useSelector((state)=>state.userInfo)
  const [filteredCategory, setFilteredCategory] = useState([])

  const {cartList} = useSelector((state)=>state.productInfo)
  const {catList} = useSelector((state)=>state.categoryInfo)
  const searchCategory = catList.filter((item)=> item.slug.toLowerCase().includes(form))
  const {_id} = searchCategory
  console.log(_id)
  const handleOnChange =(e)=>{
    const {value} =e.target;

    setForm(value.toLowerCase())

  }
  const handleOnSubmit = ()=>{
   
setFilteredCategory(searchCategory)
  }
  
  console.log(filteredCategory)


  

  return (
    <div className="header">
      <div className="am-im">
   <Link to ="/">
        <img src="https://m.media-amazon.com/images/I/413Ais4J2uL.jpg" alt="" />
        </Link>
        </div>
<div className="search">
  <input onChange={handleOnChange} type="text" value={form} />
  
  <Link to={`/search-page/${form}`} className='nav-link'>
  
    <FaSearch  onSubmit={()=>handleOnSubmit()} className="serach-icon"/>

  
    
    </Link>

 
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
  
    <FaShoppingCart className="basket"/>
    
    </span>
    {cartList.length > 0 &&  (<span className="cart-badge"> {cartList.length}</span>)}


</div>
</div>

      
    </div>
  );
}


