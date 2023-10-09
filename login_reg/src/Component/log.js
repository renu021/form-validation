import React from 'react';
import './logStyle.css';
import useForm from "../hooks/useForm"
import validation from '../utils/formValidation';


const Log = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validation);
 

  return (
    <div className="form-container">
       <form action="" className="logform-content" onSubmit={handleSubmit}>  {/*defining the handleSubmitfunction */}
        <h1>Create Your Account!</h1>

        <div className="log-form">
          <div className="log-table">
            <label htmlFor="email_id" className="log-label">
              Email ID
            </label>
          </div>
          <div className="log-input">
            <input
              type="text"
              id="email_id" 
              className="log-input"
              name="email_id"
              placeholder="Enter Your Email id"
              autocomplete="off"
              onChange={handleChange}  // for handling the input values 
              value={values.email_id} // defining the imported function {useStatevariableName.nameattribute}
            />
            {errors.email_id && <p>{errors.email_id}</p>}
          </div>

          <div className="log-table">
            <label htmlFor="password1" className="log-label">
              Password
            </label>
          </div>
          <div className="log-input">
            <input
              type="password"
              id="password1" 
              className="log-input"
              name="password1" 
              placeholder="Enter Your Password"
              autocomplete="off"
              onChange={handleChange}
              value={values.password1}
            />
              {errors.password1 && <p>{errors.password1}</p>}
          </div>

          <div className="log-table">
            <label htmlFor="password2" className="log-label">
              Confirm Password
            </label>
          </div>
          <div className="log-input">
            <input
              type="password"
              id="password2" 
              className="log-input"
              name="password2" 
              placeholder="Enter Your Confirm Password"
              autocomplete="off"
              onChange={handleChange}
              value={values.password2}
            />
             {errors.password2 && <p>{errors.password2}</p>}
          </div>

          <div className="log-btn">
            <a href="/Register"><button type="submit" className="singup-btn">Sign up</button></a>
            <span>Already have an account? Login <a href="/Home">here</a></span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Log;
