import { useState, useEffect } from "react";
import styles from "./index.module.css";

const trafficConfig = {
  red: {
    next: "yellow",
  },
  yellow: {
    next: "green",
  },
  green: {
    next: "red",
  },
};

const RenderLight = ({ color }) => {
  switch (color) {
    case "red":
      return <div className={styles.red} />;
    case "yellow":
      return <div className={styles.yellow} />;
    case "green":
      return <div className={styles.green} />;
    default:
      null;
  }
};

export const TrafficLight = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      const nextColor = trafficConfig[color].next;
      setColor(nextColor);
    }, 5000);

    return () => clearInterval(interval);
  }, [color]);

  return (
    <>
      <h1>This is Traffic Light</h1>
      <div className={styles.trafficLightWrapper}>
        <RenderLight color={color} />
      </div>
    </>
  );
};
