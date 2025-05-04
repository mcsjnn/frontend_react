import React from "react";

const Profile = ({ currentUser }) => {
  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {currentUser.username}</p>
      <p>Email: {currentUser.email}</p>
      <p>Roles: {currentUser.roles.join(", ")}</p>
    </div>
  );
};

export default Profile;