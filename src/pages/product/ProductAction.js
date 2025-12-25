import {
  deleteReview,
  getAllCatIdProducts,
  getAllProducts,
  getOneProduct,
  getReviews,
  patchReview,
  postReview,
} from "../../helpers/axiosHelper";
import { setShowModal } from "../../system-input/systemSlice";
import {
  setAProduct,
  setCartList,
  setDecrementProduct,
  setDeleteProduct,
  setIncrementProduct,
  setProductList,
  setReviewsList,
  setSearchProduct,
} from "./Productslice";
import { toast } from "react-toastify";

export const getAllProductAction = () => async (dispatch) => {
  const ProductList = await getAllProducts();
  const { status, products } = ProductList;
  if (status === "success") {
    dispatch(setProductList(products));
  }
};
export const getCatIdProductsAction = (obj) => async (dispatch) => {
  const ProductList = await getAllCatIdProducts(obj);
  console.log(ProductList);
  const { status, list } = ProductList;
  if (status === "success") {
    dispatch(setSearchProduct(list));
  }
};

export const getAProductAction = (_id) => async (dispatch) => {
  const Product = await getOneProduct(_id);
  const { status, products } = Product;
  if (status === "success") {
    dispatch(setAProduct(products));
  }
};

export const postToCart = (product) => async (dispatch) => {
  console.log(product);
  dispatch(setCartList(product));
};
export const  deleteProductItem = (_id) => async (dispatch) => {
  console.log(_id);
  dispatch(setDeleteProduct(_id));
};
export const  incrementProductItem = (data) => async (dispatch) => {
  console.log(data);
  dispatch(setIncrementProduct(data));
};
export const  decrementProductItem = (data) => async (dispatch) => {
  console.log(data);
  dispatch(setDecrementProduct(data));
};
export const getAllReviewAction = () => async (dispatch) => {
  const reviewsList = await getReviews();
  const { status, reviews } = reviewsList;
  if (status === "success") {
    dispatch(setReviewsList(reviews));
  }
  console.log(reviews);
};
export const postReviewAction = (obj) => async (dispatch) => {
  const pending =  postReview(obj);
  toast.promise(pending, {
    pending: "Please wait...."
  })
  const { status, message } = await pending;
  toast[status](message)
  if (status === "success") {
    dispatch(setShowModal(false));
    dispatch(getAllReviewAction());
  }

};
export const patchReviewAction = (obj) => async (dispatch) => {
  const pending =  patchReview(obj);
  toast.promise(pending, {
    pending: "Please wait...."
  })
  const { status, message } = await pending;
  toast[status](message)
  if (status === "success") {
  
    dispatch(getAllReviewAction());
  }

};
export const deleteReviewAction = (_id) => async (dispatch) => {
  const pending =  deleteReview(_id);
  toast.promise(pending, {
    pending: "Please wait...."
  })
  const { status, message } = await pending;
  toast[status](message)
  if (status === "success") {
  
    dispatch(getAllReviewAction());
  }

};
