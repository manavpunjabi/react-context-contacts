import { CONNECTION_ERROR } from "../../../constants/api";
import {
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_ERROR,
} from "../../../constants/contacts";
import axiosInstance from "../../../helpers/axiosInstance";
// eslint-disable-next-line
export default (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CONTACT_LOADING, payload: id });
    await axiosInstance().delete(`/contacts/${id}`);
    dispatch({ type: DELETE_CONTACT_SUCCESS, payload: id });
  } catch (error) {
    dispatch({
      type: DELETE_CONTACT_ERROR,
      payload: error?.response ? error?.response?.data : CONNECTION_ERROR,
    });
  }
};
