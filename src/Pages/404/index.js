/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";
import { IMAGES } from "../../assets";
const NotFound = () => {
  return (
    <div className="container-not-found">
      <div className="not-found-wrapper">
        <h1>This Page 404 Not Found</h1>
        <img src={IMAGES.NotFoundImages} className="img-not-found" />
      </div>
    </div>
  );
};

export default NotFound;
