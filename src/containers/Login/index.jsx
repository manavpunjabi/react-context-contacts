import { useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "../../layout/Login";
import useForm from "./useForm";

const LoginContainer = () => {
  return (
    <div>
      <Login form={useForm()} />
    </div>
  );
};

export default LoginContainer;
