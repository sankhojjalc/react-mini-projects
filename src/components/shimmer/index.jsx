/* eslint-disable react/prop-types */
import { shimmerComponent } from "./data";

export const Shimmer = ({ type, ...rest }) => {
  const ShimmerComponent = shimmerComponent[type];

  return <ShimmerComponent {...rest} />;
};
