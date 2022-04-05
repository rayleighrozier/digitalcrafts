import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Form() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);

  const changeInput = (e) => {
    dispatch({
      type: `CHANGE_${e.target.name.toUpperCase()}`,
      payload: e.target.value,
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
      <button>Submit</button>
    </div>
  );
}
