import React from "react";
import "./Room.css";
export default function Room(props) {
  return (
    <div className="room">
      <h2>Room Name: {props.room.name}</h2>
    </div>
  );
}
