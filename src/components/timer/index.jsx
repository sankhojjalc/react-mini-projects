/**
 * In this Code we have implemented logic of timer,
 * where we have two buttons. Start/Stop and a reset button.
 * OnClick of start Button, timer start with an interval of 1 sec.
 * And the button's label changes to Pause. User can click on pause and the
 * timer pauses. And the label of the button changes to Start. If user again clicks
 * start, then the timer should resume from the place where it was stopped.
 *
 * Other Button is of reset, onclick of the reset button the timer resets to 0.
 */
import { useState, useEffect } from "react";

import styles from "./index.module.css";

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleReset = () => setTimer(0);

  const handleStartStop = () => {
    setIsPaused(!isPaused);
  };

  const incrementTime = (timer) =>
    setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

  useEffect(() => {
    const time = isPaused && incrementTime(timer);

    return () => {
      clearInterval(time);
    };
  }, [timer, isPaused]);

  return (
    <div className={styles.wrapper}>
      <h1>Timer: {timer}</h1>
      <div className={styles.button}>
        <button onClick={handleStartStop}>Start/Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
