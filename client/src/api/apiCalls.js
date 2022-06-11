import { publicRequest, userRequest } from "./requests";
import {
  registrationStart,
  registrationSuccess,
  registrationFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
} from "../redux/userSlice";
import {
  addProductStart,
  addProductSuccess,
  addProductFailure,
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
} from "../redux/productSlice";
import { addOrder, updateOrder } from "../redux/orderSlice";
import {
  updateWishlist,
  createWishlist,
  addToWishlist,
} from "../redux/wishlistSlice";
export const registration = async (dispatch, navigate, user) => {
  dispatch(registrationStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    const userId = await res.data._id;
    const wishlistResponse = await publicRequest.post("wishlist", {
      userId: userId,
    });
    dispatch(registrationSuccess(res.data));
    dispatch(createWishlist(wishlistResponse.data));
    navigate("/", { replace: true });
  } catch (err) {
    console.log(err.message);
    dispatch(registrationFailure());
  }
};
export const login = async (dispatch, navigate, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    const userId = await res.data._id;
    const wishlist = await publicRequest.post("wishlist", {
      userId: userId,
    });
    const wishlistResponse = await publicRequest.get(`wishlist/${userId}`);
    dispatch(createWishlist(wishlist.data));

    dispatch(loginSuccess(res.data));
    navigate("/account", { replace: true });
    dispatch(addToWishlist(wishlistResponse.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const logout = (dispatch, navigate) => {
  dispatch(logoutSuccess());
  navigate("/login", { replace: true });
};

export const addProduct = async (dispatch, product) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post("/products", product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const getOrders = async (userID, dispatch) => {
  try {
    const res = await userRequest.get(`orders/${userID}`);
    dispatch(addOrder(res.data));
  } catch (error) {
    console.log(error);
  }
};
export const updateOrderStatus = async (id, item, dispatch) => {
  try {
    const res = await publicRequest.patch(`orders/${id}`, item);
    dispatch(updateOrder(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const updateWishlistProducts = async (id, item, dispatch) => {
  try {
    const res = await publicRequest.patch(`wishlist/${id}`, item);
    dispatch(updateWishlist(res.data));
  } catch (error) {
    console.log(error.message);
  }
};
