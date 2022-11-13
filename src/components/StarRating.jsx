import React, { memo } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

function StarRating({ onChange, selected }) {
  const changeRating = (e) => {
    onChange(e.currentTarget.dataset.value);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          isRating={value <= selected}
          value={value}
          onClick={changeRating}
        />
      ))}
    </div>
  );
}

StarRating.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.number,
};

const StarRatingMemoized = memo(StarRating);
export default StarRatingMemoized;
