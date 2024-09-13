
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import SignIn from './pages/user_signIn_signUp/SignIn';
import SignUp from './pages/user_signIn_signUp/SignUp';
import SellerSignUp from './pages/seller_signup/SellerSignUp';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/dashboard/Dashboard';
import Category from './pages/category/Category';
import AddProduct from './pages/product/AddProduct';
import VerifyEmail from './pages/user_signIn_signUp/VerifyEmail';
import PaymentOption from './pages/Payment-option/PaymentOption';
import Order from './pages/order/Order';
import Customer from './pages/customer/Customer';
import ProductLanding from './pages/cart/ProductLanding'
import MyProfile from './pages/my-profile/MyProfile';
import { PrivateRoute } from './components/private-route/PrivateRoute';
import Product from './pages/product/Product';
import ResetPassword from './pages/user_signIn_signUp/ResetPassword';
import EditCategory from './pages/category/EditCategory';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllcategoryAction } from './pages/category/CategoryAction';
import { getAllProductAction } from './pages/product/ProductAction';
import Cart from './pages/cart/Cart';
import CheckOut from './pages/checkout/CheckOut';
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllProductAction())
    dispatch(getAllcategoryAction())
 
 
   },[dispatch])
  return (
    <div className="">
      <Routes>
        {/* public routes */}
      <Route path='/' element= {<Home/>} >  </Route>
      <Route path='/signin' element= {<SignIn/>} ></Route>
      <Route path='/reset-password' element= {<ResetPassword/>} ></Route>

      <Route path='/verify-email' element= {<VerifyEmail/>} ></Route>
       

      <Route path='/signup' element= {<SignUp/>} ></Route>


      <Route path='/product-landing/:_id' element= {<ProductLanding/>} ></Route>
      <Route path='/cart/:_id' element= {<Cart/>} ></Route>
      <Route path='/checkout' element= {<CheckOut/>} ></Route>


      <Route path='/add-product' element= {<AddProduct/>} ></Route>
      <Route path='/edit-category/_id' element= {<EditCategory/>} ></Route>




      {/* private routes */}

      <Route path='/seller_signup' element= {<PrivateRoute><SellerSignUp/></PrivateRoute>} ></Route>
      <Route path='/product' element= {<PrivateRoute><Product/></PrivateRoute>} ></Route>

      <Route path='/payment-option' element= {<PrivateRoute><PaymentOption/></PrivateRoute>} ></Route>
      <Route path='/order' element= {<PrivateRoute><Order/></PrivateRoute>} ></Route>
      <Route path='/customer' element= {<PrivateRoute><Customer/></PrivateRoute>} ></Route>
      <Route path='/profile' element= {<PrivateRoute><MyProfile/></PrivateRoute>} ></Route>
      <Route path='/dashboard' element= {<PrivateRoute><Dashboard/></PrivateRoute>} ></Route>
      <Route path='/category' element= {<PrivateRoute><Category/></PrivateRoute>} ></Route>
    
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
