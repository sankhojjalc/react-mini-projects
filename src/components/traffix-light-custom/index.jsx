import { useState, useEffect } from "react";
import { Light } from "./Light";
import { data } from "./data";

export const TrafficLightCustom = () => {
  const [count, setCount] = useState(0);
  const [presentColorCtx, setPresentColorCtx] = useState(data[0]);
  let timeCtx = null;

  //this will set the signal as green and timer will stop for green.
  const handleGoGreen = () => {};
  //this will increase the timer of the present signal by 1000ms- handle with debounce
  const handleIncreaseTimer = () => {};
  //this will reset the signal
  const handleReset = () => {};

  useEffect(() => {
    timeCtx = setTimeout(() => {
      if (count < 3) {
        setCount((prev) => prev + 1);
        setPresentColorCtx((prev) => ({ ...prev, ...data[count] }));
      } else {
        setCount(0);
        setPresentColorCtx((prev) => ({ ...prev, ...data[0] }));
      }
    }, presentColorCtx.timer);

    return () => clearTimeout(timeCtx);
  }, [count, presentColorCtx]);

  return (
    <>
      <div
        style={{ width: "60px", height: "120px", border: "2px solid black" }}
      >
        {data.map((item) => (
          <div
            key={item.color}
            style={{
              visibility: item?.color === presentColorCtx.color ? "" : "hidden",
            }}
          >
            <Light color={item.color} />
          </div>
        ))}
      </div>
      <button onClick={handleGoGreen}>Go Green</button>
      <button onClick={handleIncreaseTimer}>Increase Timer</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
