import React from "react";
import { withFormik, Form, Field } from "formik";

const FriendsForm = () => {
  return (
    <Form>
      <div>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" autoComplete="off" placeholder="Name" />
      </div>
      <div>
        <label htmlFor="Age">age</label>
        <Field type="text" name="age" autoComplete="off" placeholder="Age" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field
          type="text"
          name="email"
          autoComplete="off"
          placeholder="Email"
        />
      </div>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      name: "",
      age: "",
      email: ""
    };
  }
})(FriendsForm);
