import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import "./Gallery.css";

const images = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app-gallery flex-center">
      <div className="app-gallery-content">
        <SubHeading title="Instgram" />
        <h1 className="headtext-cormorant">Photo Gallery</h1>
        <p className="p-opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur.
        </p>
        <button type="button" className="custom-button">
          View more
        </button>
      </div>

      <div className="app-gallery-images">
        <div className="app-gallery-images-container" ref={scrollRef}>
          {images.map((image, index) => (
            
            <div
              className="app-gallery-images-card flex-center"
              key={`gallery-image-${index + 1}`}
            >
              <img src={image} alt="gallery-image" />
              <BsInstagram className="gallery-image-icon" />
            </div>
          ))}
        </div>
        <div className="app-gallery-images-arrow">
          <BsArrowLeftShort
            className="gallery-arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery-arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
