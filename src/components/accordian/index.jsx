import { useState } from "react";

import { data } from "./data";
import styles from "./index.module.css";

const renderAccordian = () =>
  data.map((item) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
      <div className={styles.accordianWrapper} key={item.key}>
        <div className={styles.question}>
          <h2>Question : {item.question}</h2>
          <span onClick={toggle}>{isOpen ? <>&#8595;</> : <>&#8594;</>}</span>
        </div>
        {isOpen && <h4>Answer: {item.answer}</h4>}
      </div>
    );
  });

export const Accordian = () => {
  return <div className={styles.wrapper}>{renderAccordian()}</div>;
};
