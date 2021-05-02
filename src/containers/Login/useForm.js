import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { login } from "../../context/actions/auth/login";
import { register } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";

export default () => {
  const history = useHistory();
  const {
    authDispatch,
    authState: {
      auth: { loading, error, user },
    },
  } = useContext(GlobalContext);
  useEffect(() => user?.user && history.push(`/`), [user]);
  const [form, setForm] = useState({});

  const onChange = (e, { name, value }) => setForm({ ...form, [name]: value });

  const loginFormValid = !form.userName?.length || !form.password?.length;

  const onSubmit = () => login(form)(authDispatch);

  return {
    form,
    onChange,
    loginFormValid,
    onSubmit,
    loading,
    error,
    user,
  };
};
