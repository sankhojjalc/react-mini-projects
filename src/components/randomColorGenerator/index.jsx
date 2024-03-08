import { useState } from "react";

import styles from "./index.module.css";

const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

export const RandomColorGenerator = () => {
  const [isHexState, setIsHexState] = useState(false);
  const [color, setColor] = useState(null);

  const generateRandomHexCode = () => {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      hexCode = hexCode + hexValues[Math.floor(Math.random() * 16)];
    }
    setColor(hexCode);
  };

  const generateRandomRGBColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    setColor(`rgb(${red},${green},${blue})`);
  };

  const generateRandomColor = () =>
    isHexState ? generateRandomHexCode() : generateRandomRGBColor();

  return (
    <div className={styles.wrapper} style={{ backgroundColor: color }}>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.buttonSelect}
          onClick={() => setIsHexState(true)}
        >
          Hex
        </button>
        <button
          className={styles.buttonSelect}
          onClick={() => setIsHexState(false)}
        >
          RGB
        </button>
        <button className={styles.generate} onClick={generateRandomColor}>
          Generate Random Color
        </button>
      </div>
      <div>
        <h3>Selected State:{isHexState ? "Hex" : "RGB"}</h3>
        <h1>Value: {color}</h1>
      </div>
    </div>
  );
};
