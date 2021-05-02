import axiosInstance from "../../../helpers/axiosInstance";
import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../../../constants/auth";
import { CONNECTION_ERROR } from "../../../constants/api";

export const register = ({
  email,
  password,
  firstName: first_name,
  lastName: last_name,
  userName: username,
}) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_LOADING });
    const { data } = await axiosInstance().post(`/auth/register`, {
      email,
      password,
      first_name,
      last_name,
      username,
    });
    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
    dispatch({
      type: REGISTER_ERROR,
      payload: error?.response?.data || CONNECTION_ERROR,
    });
  }
};
