import {
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_ERROR,
  LOGOUT,
} from "../../constants/contacts";
import contactsInitialState from "../initialStates/contactsInitialState";

const contacts = (state, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_LOADING:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: true,
        },
      };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: payload,
        },
      };
    case GET_CONTACTS_ERROR:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          error: payload,
        },
      };
    case LOGOUT:
      return {
        ...state,
        contactsInitialState,
      };
    default:
      return state;
  }
};

export default contacts;
