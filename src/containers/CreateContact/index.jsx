import { useState } from "react";
import Create from "../../layout/Contacts/Create/index.jsx";

const CreateContactComponent = () => {
  const [form, setForm] = useState({});

  const onChange = (e, { name, value }) => setForm({ ...form, [name]: value });

  return <Create form={form} onChange={onChange} />;
};

export default CreateContactComponent;
