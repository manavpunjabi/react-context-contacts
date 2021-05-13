import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import getContacts from "../../context/actions/contacts/getContacts";
import { GlobalContext } from "../../context/Provider";
import { useHistory } from "react-router-dom";
import ContactListUI from "../../layout/Contacts/List";
import deleteContact from "../../context/actions/contacts/deleteContact";
import starContact from "../../context/actions/contacts/starContact";

const ContactsContainer = () => {
  const { contactDispatch, contactState } = useContext(GlobalContext);
  const history = useHistory();
  const {
    contacts: { data },
  } = contactState;
  useEffect(
    () => data.length === 0 && getContacts(history)(contactDispatch),
    []
  );
  const onClickDeleteContact = (id) => deleteContact(id)(contactDispatch);

  const onClickStar = (id, is_favorite) =>
    starContact(id, !is_favorite)(contactDispatch);

  return (
    <ContactListUI
      state={contactState}
      onClickDeleteContact={onClickDeleteContact}
      onClickStar={onClickStar}
    />
  );
};

export default ContactsContainer;
