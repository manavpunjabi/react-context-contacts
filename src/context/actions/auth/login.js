import axiosInstance from "../../../helpers/axiosInstance";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../../../constants/auth";
import { CONNECTION_ERROR } from "../../../constants/api";

export const login = ({ password, userName: username }) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_LOADING });
    const { data } = await axiosInstance().post(`/auth/login`, {
      password,
      username,
    });
    localStorage.token = data.token;
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
    dispatch({
      type: LOGIN_ERROR,
      payload: error?.response?.data || CONNECTION_ERROR,
    });
  }
};
