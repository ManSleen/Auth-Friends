import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";

import Login from "./components/Login";

const App = () => {
  return (
    <div>
      Welcome to App!
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
      <Route exact path="/" />
      <Route exact path="/login" component={Login} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
