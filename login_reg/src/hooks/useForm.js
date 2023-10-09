
import { useState } from "react";

const useForm = (validation) => {
  const [values, setValues] = useState({
    email_id: "",
    password1: "",
    password2: "",   // input name attribute
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validation(values));
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
