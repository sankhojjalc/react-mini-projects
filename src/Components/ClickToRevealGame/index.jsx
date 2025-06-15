// User would get an Array [A,b,c,b,c,a]. User needs to render 6 squares with text “?”.
//  On click of odd number click, the square should reveal the value hidden behind it.
//  On even click, if the pair is selected then fine if non pair is selected, then all squares are set as ?.
//  If correct pair is selected and no other square is left to select, then show alert you won.

import { useState, useEffect } from "react";
import "./index.css";

const data1 = ["?", "?", "?", "?", "?", "?"];
const data2 = ["A", "B", "C", "B", "C", "A"];

const ClickToRevealGame = () => {
  const [clickedItem, setClickedItem] = useState([]);

  const handleClick = (idx) => {
    setClickedItem((prev) => [...prev, idx]);
  };

  useEffect(() => {
    if (clickedItem.length === data2.length) {
      alert("Yay, You Won!!");
    }
    if (
      clickedItem.length % 2 === 0 &&
      data2[clickedItem[clickedItem.length - 1]] !==
        data2[clickedItem[clickedItem.length - 2]]
    ) {
      setClickedItem([]);
    }
  }, [clickedItem]);

  return (
    <div className="wrapper">
      {data2.map((item, idx) => (
        <div key={idx} className="items" onClick={() => handleClick(idx)}>
          {(clickedItem.includes(idx) && item) || "?"}
        </div>
      ))}
    </div>
  );
};
export default ClickToRevealGame;
