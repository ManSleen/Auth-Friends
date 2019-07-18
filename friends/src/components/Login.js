import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { axiosWithAuth } from "../authorization/axiosWithAuth";

const Login = ({ values, errors, touched, isSubmitting }) => {
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
      <button>Submit &rarr;</button>
      {isSubmitting && "Loading!"}
    </Form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      username: "Lambda School",
      password: "i<3Lambd4"
    };
  },
  handleSubmit(values, formikBag) {
    console.log(values);
    const url = "/login";
    return axiosWithAuth()
      .post(url, values)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        formikBag.props.history.push("/friends-list");
        formikBag.resetForm();
      })
      .catch(err => console.log(err));
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4, "Your username should be at least 4 characters long")
      .required(),
    password: Yup.string()
      .min(4, "Your password should be at least 4 characters long")
      .required()
  })
})(Login);
