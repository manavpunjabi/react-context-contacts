import { CONNECTION_ERROR } from "../../../constants/api";
import {
  ADD_CONTACT_LOADING,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_ERROR,
} from "../../../constants/contacts";
import { FIREBASE_IMAGE_REF } from "../../../constants/firebase";
import axiosInstance from "../../../helpers/axiosInstance";
import { storage } from "../../../helpers/firebase";
// eslint-disable-next-line
export default ({
    firstName: first_name,
    lastName: last_name,
    phone_number,
    countryCode: country_code,
    contactPicture: contact_picture,
  }) =>
  async (dispatch) => {
    try {
      dispatch({ type: ADD_CONTACT_LOADING });
      const saveToBackend = async (url = null) => {
        const { data } = await axiosInstance().post(`/contacts/`, {
          first_name,
          last_name,
          phone_number,
          country_code,
          contact_picture: url,
        });
        dispatch({ type: ADD_CONTACT_SUCCESS, payload: data });
      };

      if (contact_picture) {
        storage
          .ref(`${FIREBASE_IMAGE_REF}/${contact_picture.name}`)
          .put(contact_picture)
          .on(
            `state_changed`,
            (snapshot) => {},
            async (error) => {},
            async () => {
              const url = await storage
                .ref(FIREBASE_IMAGE_REF)
                .child(contact_picture.name)
                .getDownloadURL();
              saveToBackend(url);
            }
          );
      } else {
        saveToBackend();
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: ADD_CONTACT_ERROR,
        payload: error?.response ? error?.response?.data : CONNECTION_ERROR,
      });
    }
  };
