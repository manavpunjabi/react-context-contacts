import { useEffect } from "react";
import { Link } from "react-router-dom";
import Register from "../../layout/Register";
import useForm from "./useForm";

const RegisterContainer = () => {
  return (
    <div>
      <Register form={useForm()} />
    </div>
  );
};

export default RegisterContainer;
