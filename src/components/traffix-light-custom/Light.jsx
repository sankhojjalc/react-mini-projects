export const Light = ({ color }) => {
  return (
    <div
      style={{
        background: color,
        height: "30px",
        width: "30px",
        border: "2px solid black",
        borderRadius: "50%",
      }}
    ></div>
  );
};
