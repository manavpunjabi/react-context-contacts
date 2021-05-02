import {
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_ERROR,
  ADD_CONTACT_ERROR,
  ADD_CONTACT_LOADING,
  ADD_CONTACT_SUCCESS,
  LOGOUT,
  CLEAR_ADD_CONTACT,
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
    case ADD_CONTACT_LOADING:
      return {
        ...state,
        addContact: { ...state.addContact, loading: true },
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          data: payload,
          error: null,
        },
        contacts: {
          ...state.contacts,
          loading: false,
          data: [payload, ...state.contacts.data],
        },
      };
    case ADD_CONTACT_ERROR:
      return {
        ...state,
        addContact: { ...state.addContact, loading: false, error: payload },
      };
    case CLEAR_ADD_CONTACT:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          data: null,
          error: null,
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
