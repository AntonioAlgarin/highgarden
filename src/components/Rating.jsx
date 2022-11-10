import React, { useState } from "react";
import PropTypes from "prop-types";

function Rating(props) {
  const [ratingFormData, setRatingFormData] = useState({
    rating: 0,
    commentId: 10,
  });

  const handleOnChange = (value) => {
    setRatingFormData((prevState) => {
      const newRating = {
        ...prevState,
      };
      newRating.rating = Number(value);
      return newRating;
    });
  };

  const onSubmit = () => {
    const payload = {
      entityId: props.entityId,
      entityTypeId: props.entityTypeId,
      rating: ratingFormData.rating,
      commentId: ratingFormData.commentId,
    };
  };

  return (
    <React.Fragment>
      <br></br>
      <button onClick={onSubmit}>Submit</button>
    </React.Fragment>
  );
}

Rating.propTypes = {
  entityTypeId: PropTypes.number.isRequired,
  entityId: PropTypes.number.isRequired,
};

export default Rating;
