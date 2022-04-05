import React from "react";

export default function Grid({ photos }) {
  console.log(photos);
  return (
    <div className="grid">
      {photos.map((photo) => {
        return (
          <div className="grid-image-container">
            <img src={photo.url} />
          </div>
        );
      })}
    </div>
  );
}
