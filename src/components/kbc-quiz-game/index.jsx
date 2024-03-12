/* eslint-disable react/prop-types */
import { useState } from "react";
import { data } from "./data";

import Styles from "./index.module.css";

const Option = ({ option, index, answer }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => setIsClicked(true);
  return (
    <div
      className={Styles.option}
      onClick={handleClick}
      style={{
        background: isClicked ? (answer === option ? "green" : "red") : "",
      }}
    >
      {index + 1}. {option}
    </div>
  );
};

const Quiz = ({ item }) => {
  return (
    <div className={Styles.questions}>
      <div className={Styles.question}>
        <b>Question:</b> {item.question}
      </div>
      <div className={Styles.options}>
        {item.options.map((option, index) => (
          <Option
            option={option}
            key={index}
            index={index}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export const QuizApp = () => {
  return (
    <div className="wrapper">
      {data.map((item) => (
        <Quiz item={item} key={item.key} />
      ))}
    </div>
  );
};
