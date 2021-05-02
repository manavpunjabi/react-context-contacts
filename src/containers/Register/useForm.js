import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
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

  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const onChange = (e, { name, value }) => setForm({ ...form, [name]: value });

  useEffect(() => {
    if (error) {
      for (const err in error) {
        setFieldErrors({ ...fieldErrors, [err]: error[err][0] });
      }
    }
  }, [error]);

  useEffect(() => user && history.push(`/auth/login`), [user]);

  const registerFormValid =
    !form.userName?.length ||
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.email?.length ||
    !form.password?.length;

  const onSubmit = () => {
    setFieldErrors({});
    register(form)(authDispatch);
  };

  return {
    form,
    onChange,
    fieldErrors,
    registerFormValid,
    onSubmit,
    loading,
    error,
    user,
  };
};
