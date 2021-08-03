import { ActionTypes } from "../Constants/action-types";
import axios from "axios";

export const setProducts = () => {
  return async function (dispatch) {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: ActionTypes.SET_PRODUCTS,
      payload: response.data,
    });
  };
};

export const selectedProducts = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};

export const resetProduct = () => {
  return {
    type: ActionTypes.RESET_PRODUCTS,
  };
};
