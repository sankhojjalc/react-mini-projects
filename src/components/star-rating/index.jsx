/* eslint-disable react/prop-types */
import { useState } from "react";

const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Star = ({ setSelectedStar, starId, setHoveredStar }) => (
  <i
    className="bi bi-star"
    style={{ fontSize: "2rem" }}
    onMouseOver={() => setHoveredStar(starId)}
    onClick={() => setSelectedStar(starId)}
  ></i>
);
const FilledStar = ({ setSelectedStar, starId, setHoveredStar }) => (
  <i
    className="bi bi-star-fill"
    style={{ fontSize: "2rem" }}
    onClick={() => setSelectedStar(starId)}
    onMouseOver={() => setHoveredStar(starId)}
  ></i>
);

export const StarRating = () => {
  const [selectedStar, setSelectedStar] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  return stars.map((star) => {
    return star <= (selectedStar || hoveredStar) ? (
      <FilledStar
        setSelectedStar={setSelectedStar}
        starId={star}
        key={star}
        setHoveredStar={setHoveredStar}
      />
    ) : (
      <Star
        key={star}
        setSelectedStar={setSelectedStar}
        starId={star}
        setHoveredStar={setHoveredStar}
      />
    );
  });
};
