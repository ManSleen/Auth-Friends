import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../authorization/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  function bradsFunction(res) {
    setFriends(res);
  }

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res);
        bradsFunction(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {friends.map(friend => (
        <div key={friend.id}>
          <h1>Name: {friend.name}</h1>
          <h2>Age: {friend.age}</h2>
          <h3>Email: {friend.email}</h3>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
