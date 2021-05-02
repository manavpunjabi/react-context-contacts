import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import getContacts from "../../context/actions/contacts/getContacts";
import { GlobalContext } from "../../context/Provider";
import { useHistory } from "react-router-dom";
import ContactListUI from "../../layout/Contacts/List";

const ContactsContainer = () => {
  const { contactDispatch, contactState } = useContext(GlobalContext);
  const history = useHistory();
  useEffect(() => getContacts(history)(contactDispatch), []);

  return <ContactListUI state={contactState} />;
};

export default ContactsContainer;
