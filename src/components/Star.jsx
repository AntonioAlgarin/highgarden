import React, { memo } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

function Star({ isRating, onClick, value }) {
  return (
    <FaStar
      color={isRating ? "black" : "lightgray"}
      onClick={onClick}
      data-value={value}
    />
  );
}

Star.propTypes = {
  isRating: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.number,
};
const StarMemoized = memo(Star);
export default StarMemoized;
