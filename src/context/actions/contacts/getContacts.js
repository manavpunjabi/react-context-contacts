import { CONNECTION_ERROR } from "../../../constants/api";
import {
  GET_CONTACTS_ERROR,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from "../../../constants/contacts";
import axiosInstance from "../../../helpers/axiosInstance";

// eslint-disable-next-line
export default (history) => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOADING });
  try {
    const { data } = await axiosInstance(history).get(`/contacts/`);
    console.log("🚀 ~ file: getContacts.js ~ line 5 ~ data", data);
    dispatch({ type: GET_CONTACTS_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
    dispatch({
      type: GET_CONTACTS_ERROR,
      payload: error?.response ? error?.response?.data : CONNECTION_ERROR,
    });
  }
};
