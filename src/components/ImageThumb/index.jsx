import React from "react";
import { Image } from "semantic-ui-react";
import "./style.css";

const ImageThumb = ({ firstName, lastName, src, className, style }) => {
  const getInitials = () =>
    firstName && lastName ? `${firstName[0]}${lastName[0]}` : ``;
  return (
    <div>
      {src && (
        <Image style={style} className={`thumbnail ${className}`} src={src} />
      )}
      {!src && (
        <div style={style} className={`thumbnail ${className}`}>
          <span>{getInitials()}</span>
        </div>
      )}
    </div>
  );
};

export default ImageThumb;
