import { useState } from "react";
import styles from "./index.module.css";
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const SelectTheSquare = () => {
  const [selectedSquareSequence, setSelectSquareSequence] = useState([]);

  const removeSequence = () => {
    if (selectedSquareSequence.length === 0) return;
    const timer = setInterval(() => {
      setSelectSquareSequence((prevSequence) => {
        if (prevSequence.length === 0) {
          clearInterval(timer);
          return [];
        }
        return prevSequence.slice(0, -1);
      });
    }, 1000);
  };

  const handleSmallSquareClick = (item) => {
    if (!selectedSquareSequence.includes(item)) {
      setSelectSquareSequence((prevSequence) => [...prevSequence, item]);
    }
    if (selectedSquareSequence.length === 7) {
      setTimeout(removeSequence, 1000);
    }
  };

  return (
    <div className={styles.bigSquare}>
      {arr.map((item) => {
        return item === 4 ? (
          <div
            className={styles.smallSquare}
            style={{ visibility: "hidden" }}
            key={item}
          ></div>
        ) : (
          <div
            className={styles.smallSquare}
            key={item}
            onClick={() => handleSmallSquareClick(item)}
            style={{
              background: selectedSquareSequence?.includes(item) ? "green" : "",
            }}
          ></div>
        );
      })}
    </div>
  );
};
