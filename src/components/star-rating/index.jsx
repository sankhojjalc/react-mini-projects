import { useState } from "react";

const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Star = ({ setSelectedStar, starId }) => (
  <i
    className="bi bi-star"
    style={{ fontSize: "2rem" }}
    onClick={() => setSelectedStar(starId)}
  ></i>
);
const FilledStar = ({ setSelectedStar, starId }) => (
  <i
    className="bi bi-star-fill"
    style={{ fontSize: "2rem" }}
    onClick={() => setSelectedStar(starId)}
  ></i>
);

export const StarRating = () => {
  const [selectedStar, setSelectedStar] = useState(0);

  return stars.map((star) => {
    return star <= selectedStar ? (
      <FilledStar setSelectedStar={setSelectedStar} starId={star} key={star} />
    ) : (
      <Star key={star} setSelectedStar={setSelectedStar} starId={star} />
    );
  });
};
