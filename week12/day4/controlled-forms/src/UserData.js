import React from "react";

export default function UserData({ userData }) {
  return (
    <>
      <h1>User Data Entered</h1>
      <input type="text" disabled value={userData.name} />
      <input type="text" disabled value={userData.email} />
    </>
  );
}
