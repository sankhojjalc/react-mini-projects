import { SquareShimmer, RectangleShimmer, CircleShimmer } from "./Shimmers";

const RECTANGLE = "rectangle";
const SQUARE = "square";
const CIRCLE = "circle";

export const shimmerComponent = {
  [RECTANGLE]: RectangleShimmer,
  [SQUARE]: SquareShimmer,
  [CIRCLE]: CircleShimmer,
};
