import { publicRequest, userRequest } from "./requests";
import {
  registrationStart,
  registrationSuccess,
  registrationFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
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
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
} from "../redux/productSlice";
import {
  addOrder,
  updateUserOrder,
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
} from "../redux/orderSlice";
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
    navigate("/account", { replace: true });
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

    const wishlistResponse = await publicRequest.get(`wishlist/${userId}`);
    dispatch(loginSuccess(res.data));
    res.data.isAdmin
      ? navigate("/admin/dashboard", { replace: true })
      : navigate("/account", { replace: true });
    dispatch(addToWishlist(wishlistResponse.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const logout = (dispatch, navigate) => {
  dispatch(logoutSuccess());
  navigate("/login", { replace: true });
};
export const updateUserInfo = async (id, user, dispatch, navigate) => {
  dispatch(updateUserStart());
  try {
    const res = await publicRequest.patch(`users/${id}`, user);
    dispatch(updateUserSuccess(res.data));
    navigate("/account");
  } catch (error) {
    console.log(error.message);
    dispatch(updateUserFailure());
  }
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
    await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const getOrders = async (userID, dispatch) => {
  try {
    const res = await publicRequest.get(`orders/${userID}`);
    dispatch(addOrder(res.data));
  } catch (error) {
    console.log(error);
  }
};
export const updateOrderStatus = async (id, item, dispatch) => {
  try {
    const res = await publicRequest.patch(`orders/${id}`, item);
    dispatch(updateUserOrder(res.data));
  } catch (error) {
    console.log(error);
  }
};
export const getAllOrders = async (dispatch) => {
  dispatch(getOrderStart());
  try {
    const res = await userRequest.get("orders");
    dispatch(getOrderSuccess(res.data));
  } catch (error) {
    dispatch(getOrderFailure());
    console.error(error);
  }
};

export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteOrderStart());
  try {
    await userRequest.delete(`orders/${id}`);
    console.log(id);
    dispatch(deleteOrderSuccess(id));
  } catch (error) {
    dispatch(deleteOrderFailure());
    console.error(error);
  }
};

export const updateOrder = async (id, order, dispatch, navigate) => {
  dispatch(updateOrderStart());
  try {
    const res = await userRequest.patch(`/orders/${id}`, order);
    dispatch(updateOrderSuccess(res.data));
    navigate("/orders");
  } catch (error) {
    dispatch(updateOrderFailure());
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
export const updateProduct = async (id, product, dispatch, navigate) => {
  dispatch(updateProductStart());
  try {
    await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess({ id, product }));
    navigate("../products");
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
