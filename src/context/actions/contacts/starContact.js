import { CONNECTION_ERROR } from "../../../constants/api";
import {
  STAR_CONTACT_LOADING,
  STAR_CONTACT_SUCCESS,
  STAR_CONTACT_ERROR,
} from "../../../constants/contacts";
import axiosInstance from "../../../helpers/axiosInstance";
// eslint-disable-next-line
export default (id, is_favorite) => async (dispatch) => {
  try {
    dispatch({ type: STAR_CONTACT_LOADING, payload: id });
    const { data } = await axiosInstance().patch(`/contacts/${id}`, {
      is_favorite,
    });
    dispatch({ type: STAR_CONTACT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: STAR_CONTACT_ERROR,
      payload: error?.response ? error?.response?.data : CONNECTION_ERROR,
    });
  }
};
