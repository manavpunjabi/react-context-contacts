import { createContext, useReducer } from "react";
import authInitialState from "./initialStates/authInitialState";
import contactsInitialState from "./initialStates/contactsInitialState";
import auth from "./reducers/auth";
import contacts from "./reducers/contacts";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactState, contactDispatch] = useReducer(
    contacts,
    contactsInitialState
  );

  return (
    <GlobalContext.Provider
      value={{ authState, authDispatch, contactState, contactDispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
