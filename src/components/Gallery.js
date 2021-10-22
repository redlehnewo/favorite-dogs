import React from "react";
import PropTypes from "prop-types";
import ImageCard from "src/components/ImageCard";

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  onAddToFavoritesClick: PropTypes.func,
};

function Gallery({ images, onAddToFavoritesClick }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {images?.map((image) => (
        <ImageCard src={image} onAddToFavoritesClick={onAddToFavoritesClick} />
      ))}
    </div>
  );
}

export default Gallery;
