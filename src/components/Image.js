import React from "react";
import { StyledImage } from "../styles/StyledImage";

export default function Image({ index, image }) {
  return (
    <StyledImage
      className="grid-image"
      key={index}
      href={image.links.html}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="grid-item" src={image.urls.regular} alt={image.alt_description} />
    </StyledImage>
  );
}
