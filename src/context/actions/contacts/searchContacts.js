import { SEARCH_CONTACTS } from "../../../constants/contacts";
// eslint-disable-next-line
export default (searchText) => (dispatch) =>
  dispatch({ type: SEARCH_CONTACTS, payload: searchText });
