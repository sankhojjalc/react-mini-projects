/* eslint-disable react/prop-types */
export const RectangleShimmer = ({ shimmerProps }) => {
  return (
    <div
      style={{
        height: shimmerProps.height,
        width: shimmerProps.width,
        border: shimmerProps.borderProps,
        background: "#D3D3D3",
      }}
    ></div>
  );
};

export const SquareShimmer = ({ shimmerProps }) => {
  return (
    <div
      style={{
        height: shimmerProps.height,
        width: shimmerProps.width,
        border: shimmerProps.borderProps,
        background: "#D3D3D3",
      }}
    ></div>
  );
};

export const CircleShimmer = ({ shimmerProps }) => {
  return (
    <div
      style={{
        height: shimmerProps.height,
        width: shimmerProps.width,
        border: shimmerProps.borderProps,
        borderRadius: "50%",
        background: "#D3D3D3",
      }}
    ></div>
  );
};
