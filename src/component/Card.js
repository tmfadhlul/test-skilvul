import React from "react";
import { Image, Shimmer } from "react-shimmer";

const Card = ({ title, url, className }) => {
  if (!url) {
    return (
      <div
        className={className}
        role="button"
        class="card mx-3 pointer"
        style={{ width: "18rem", height: "10rem" }}
      >
        <div class="d-flex justify-content-center align-items-center h-100">
          <h5 class="card-title">{title}</h5>
        </div>
      </div>
    );
  } else {
    return (
      <div className={className}>
        <Image src={url} fallback={<Shimmer width={800} height={600} />} />
      </div>
    );
  }
};

export default Card;
