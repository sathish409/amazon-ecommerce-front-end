import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { ImStarEmpty } from "react-icons/im";
const maxStar = 5;
export const ReviewStars = ({ avgRating }) => {
  const ratingNum = typeof avgRating === 'number' && !isNaN(avgRating)
    ? avgRating
    : maxStar;
  const fullRating = Math.floor(ratingNum); //
  const isHalfStar = ratingNum - fullRating >= 0.1;
  const emptyStar = isHalfStar
    ? maxStar - fullRating - 1
    : maxStar - fullRating;
  console.log(maxStar, ratingNum);
  return (
    <div className="star">
      <span>
        {Array(Math.max(0, fullRating))
          .fill("")
          .map((item, i) => (
            <FaStar className="text-warning" />
          ))}
        {isHalfStar && <FaStarHalfAlt className="text-warning" />}
        {Array(emptyStar)
          .fill("")
          .map((item, i) => (
            <ImStarEmpty className="text-warning" />
          ))}
      </span>
    </div>
  );
};
