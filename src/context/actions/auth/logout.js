import { LOGOUT } from "../../../constants/contacts";

// eslint-disable-next-line
export default (history) => (dispatch) => {
  localStorage.removeItem(`token`);
  dispatch({ type: LOGOUT });
  history.push(`/auth/login`);
};
