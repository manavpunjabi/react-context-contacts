import {
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_ERROR,
  ADD_CONTACT_ERROR,
  ADD_CONTACT_LOADING,
  ADD_CONTACT_SUCCESS,
  LOGOUT,
  CLEAR_ADD_CONTACT,
  SEARCH_CONTACTS,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_LOADING,
  STAR_CONTACT_LOADING,
  STAR_CONTACT_SUCCESS,
  STAR_CONTACT_ERROR,
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
    case DELETE_CONTACT_LOADING:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: state.contacts.data.map((contact) =>
            contact.id === payload ? { ...contact, deleting: true } : contact
          ),
        },
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: state.contacts.data.filter((contact) => contact.id !== payload),
        },
      };
    case STAR_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          data: state.contacts.data.map((contact) =>
            contact.id === payload.id ? payload : contact
          ),
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
    case SEARCH_CONTACTS:
      return {
        contacts: {
          ...state.contacts,
          loading: false,
          isSearchActive: !!payload.length > 0 || false,
          foundContacts: state.contacts.data.filter((contact) => {
            try {
              return (
                contact.first_name
                  .toLowerCase()
                  .search(payload.toLowerCase()) !== -1 ||
                contact.last_name
                  .toLowerCase()
                  .search(payload.toLowerCase()) !== -1 ||
                contact.phone_number
                  .toLowerCase()
                  .search(payload.toLowerCase()) !== -1
              );
            } catch (error) {
              return [];
            }
          }),
        },
      };
    default:
      return state;
  }
};

export default contacts;
