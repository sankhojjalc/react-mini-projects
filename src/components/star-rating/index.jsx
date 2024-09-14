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
const FilledStar = ({
  setSelectedStar,
  starId,
  setHoveredStar,
  selectedStar,
}) => (
  <i
    className="bi bi-star-fill"
    style={{ fontSize: "2rem" }}
    onClick={() => setSelectedStar(starId)}
    onMouseOver={() => setHoveredStar(starId)}
    onMouseLeave={() => {
      if (!selectedStar) {
        setHoveredStar(0);
      }
    }}
  ></i>
);

export const StarRating = () => {
  const [selectedStar, setSelectedStar] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  return stars.map((star) =>
    star <= (selectedStar || hoveredStar) ? (
      <FilledStar
        key={star}
        starId={star}
        selectedStar={selectedStar}
        setHoveredStar={setHoveredStar}
        setSelectedStar={setSelectedStar}
      />
    ) : (
      <Star
        key={star}
        starId={star}
        setHoveredStar={setHoveredStar}
        setSelectedStar={setSelectedStar}
      />
    )
  );
};
