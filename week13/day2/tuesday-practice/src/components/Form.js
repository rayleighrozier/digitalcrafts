import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Form() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const user = useSelector((state) => state.user);
  const userlist = useSelector((state) => state.userlist);

  const changeInput = (e) => {
    dispatch({
      type: `CHANGE_${e.target.name.toUpperCase()}`,
      payload: e.target.value,
    });
  };
  const addUser = () => {
    dispatch({
      type: `CHANGE_USERLIST`,
      payload: user,
    });
    dispatch({
      type: `CHANGE_USER`,
      payload: "",
    });
  };
  return (
    <div>
      <h1>Form</h1>
      <p>Name</p>
      <input name="name" value={name} onChange={changeInput} type="text" />
      <p>Email</p>
      <input name="email" value={email} onChange={changeInput} type="text" />
      <p>Password</p>
      <input
        name="password"
        value={password}
        onChange={changeInput}
        type="text"
      />
      <p>New Field</p>
      <input name="newfield" onChange={changeInput} type="text" />
      <p>Add To User List:</p>
      <input value={user} name="user" onChange={changeInput} type="text" />
      <button name="userlist" onClick={addUser}>
        Submit
      </button>
      <div>
        {userlist?.map((user) => {
          return <p> {user} </p>;
        })}
      </div>
    </div>
  );
}
