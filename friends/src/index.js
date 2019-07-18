import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

const App = () => {
  const PrivateRoute = ({ component: FriendsList, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <FriendsList {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
    <div>
      Welcome to App!
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/friends-list">Friends List</Link>
      </div>
      <Route exact path="/" />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/friends-list" component={FriendsList} />
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
