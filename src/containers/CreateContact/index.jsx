import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import clearCreateContact from "../../context/actions/contacts/clearCreateContact.js";
import createContact from "../../context/actions/contacts/createContact.js";
import { GlobalContext } from "../../context/Provider.js";
import Create from "../../layout/Contacts/Create/index.jsx";

const CreateContactComponent = () => {
  const history = useHistory();
  const [form, setForm] = useState({});
  const [tempFile, setTempFile] = useState(null);
  const {
    contactDispatch,
    contactState: {
      addContact: { loading, error, data },
    },
  } = useContext(GlobalContext);
  const onChange = (e, { name, value }) => setForm({ ...form, [name]: value });
  const onImageChange = (e) => {
    e.persist();
    const fileURL = e.target.files[0];
    setForm({ ...form, contactPicture: fileURL });
    if (fileURL) {
      setTempFile(URL.createObjectURL(fileURL));
    }
  };
  useEffect(() => {
    if (data) {
      history.push(`/`);
    }
    return () => clearCreateContact()(contactDispatch);
  }, [data]);
  const onSubmit = () => createContact(form)(contactDispatch);

  const formIsEdited =
    Object.values(form)?.filter((item) => item && item !== ``)?.length > 0 &&
    !data;

  const formInvalid =
    !form?.firstName?.length ||
    !form?.lastName?.length ||
    !form?.countryCode?.length ||
    !form?.phone_number;

  return (
    <Create
      form={form}
      formInvalid={formInvalid}
      onSubmit={onSubmit}
      onChange={onChange}
      loading={loading}
      formIsEdited={formIsEdited}
      onImageChange={onImageChange}
      tempFile={tempFile}
    />
  );
};

export default CreateContactComponent;
