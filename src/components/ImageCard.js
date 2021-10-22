import React from "react";
import PropTypes from "prop-types";

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  onAddToFavoritesClick: PropTypes.func,
};

function ImageCard({ src, onAddToFavoritesClick }) {
  return (
    <div
      id={src}
      style={{
        background: `url(${src}) center center / cover no-repeat`,
        width: "200px",
        height: "200px",
        padding: "16px",
        margin: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      {onAddToFavoritesClick && (
        <button onClick={() => onAddToFavoritesClick(src)}>
          Add to favorites
        </button>
      )}
    </div>
  );
}

export default ImageCard;
