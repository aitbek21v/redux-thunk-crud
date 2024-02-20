import axios from "axios";
import { API } from "../api";

export const addProduct = (inputValue) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(API, inputValue);
      dispatch({ type: "ADD_PRODUCT", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProduct = () => {
  return async (dispatch) => {
    try {
      const response = await axios(API);
      const { data } = await response;
      dispatch({ type: "GET_PRODUCT", payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API}/${id}`);
      dispatch({ type: "DELETE_PRODUCT", payload: id });
      dispatch(getProduct());
    } catch (e) {
      console.log(e);
    }
  };
};

export const getOneProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch({ type: "GET_ONE_PRODUCT", payload: data });
      console.log("data", data);
    } catch (e) {
      console.log(e);
    }
  };
};

export const editProduct = (id,editedProduct) => {
  return  async (dispatch) => {
    try {
      await axios.put(`${API}/${id}`,editedProduct)

    } catch (e) {
      console.log(e);
    }
  }
}
