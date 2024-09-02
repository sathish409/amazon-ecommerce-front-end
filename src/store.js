import { configureStore } from "@reduxjs/toolkit";
import userReducer from './pages/user_signIn_signUp/userSlice.js'
import categoryReducer from './pages/category/categoryslice.js'
import productReducer from './pages/product/Productslice.js'
const store = configureStore({
    reducer: {
        userInfo: userReducer,
        categoryInfo: categoryReducer,
        productInfo: productReducer,

    }
})

export default store;