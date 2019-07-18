import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Login = () => {
  return (
    <Form>
      <div>
        <label htmlFor="username">Username</label>
        <Field
          type="text"
          name="username"
          autoComplete="off"
          placeholder="Username"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          type="password"
          name="password"
          autoComplete="off"
          placeholder="Password"
        />
      </div>
      <button>Submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(Login);
