import React from "react";

export default function PhotoCard(props) {
  return (
    <div className="photo-card">
      <img key={props.photo.url} src={props.photo.url} />
    </div>
  );
}
