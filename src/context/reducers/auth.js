import {
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../../constants/auth";

const auth = (state, { type, payload }) => {
  switch (type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING: {
      return {
        ...state.auth,
        auth: { ...state.auth, loading: true, error: false },
      };
    }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: { ...state.auth, loading: false, user: payload },
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        auth: { ...state.auth, loading: false, error: payload },
      };

    default:
      return state;
  }
};

export default auth;
