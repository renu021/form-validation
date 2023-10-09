
export default function validation(values) {
    let errors = {};
  
    if (!values.email_id.trim()) {
      errors.email_id = "Email required";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email_id)
    ) {
      errors.email_id = "Email Address is invalid"; 
    }
  
    if (!values.password1.trim()) {
      errors.password1 = "Password is required";
    } else if (values.password1.length < 6) {
      errors.password1 = "Password needs at least 6 characters";
    }
  
    if (!values.password2.trim()) {
      errors.password2 = "Confirm password is required";
    } else if (values.password2 !== values.password1) {
      errors.password2 = "Passwords don't match";
    }
  
    return errors;
  }
  