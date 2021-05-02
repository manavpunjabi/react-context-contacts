import { CONNECTION_ERROR } from "../../../constants/api";
import {
  ADD_CONTACT_LOADING,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_ERROR,
} from "../../../constants/contacts";
import axiosInstance from "../../../helpers/axiosInstance";
// eslint-disable-next-line
export default ({
  firstName: first_name,
  lastName: last_name,
  phone_number,
  countryCode: country_code,
}) => async (dispatch) => {
  try {
    dispatch({ type: ADD_CONTACT_LOADING });
    const { data } = await axiosInstance().post(`/contacts/`, {
      first_name,
      last_name,
      phone_number,
      country_code,
    });
    dispatch({ type: ADD_CONTACT_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
    dispatch({
      type: ADD_CONTACT_ERROR,
      payload: error?.response ? error?.response?.data : CONNECTION_ERROR,
    });
  }
};
