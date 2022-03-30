import React from "react";
import PhotoCard from "./components/PhotoCard";
import "./components/PhotoContainer.css";

export default function PhotoContainer(props) {
  console.log(props.photos);
  return (
    <div className="photo-container">
      {props.photos.map((photo) => (
        <PhotoCard photo={photo} />
      ))}
    </div>
  );
}
