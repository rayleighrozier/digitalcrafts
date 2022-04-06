import React from "react";
import GridNav from "./GridNav";
export default function Grid({ photos }) {
  console.log(photos);
  return (
    <div className="grid-container">
      <GridNav />
      <div className="grid">
        {photos.map((photo) => {
          return (
            <div className="grid-image-container">
              <img src={photo.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
