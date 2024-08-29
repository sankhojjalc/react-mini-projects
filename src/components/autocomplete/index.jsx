import { useState } from "react";

import { getFruitsData, debounce } from "./utils";
import styles from "./index.module.css";

export const AutoCompleteSearch = () => {
  const [fruits, setFruits] = useState([]);
  const debouncedFn = debounce(getFruitsData, 500);

  const handleOnChange = async (e) => {
    if (e.target.value !== "") {
      const data = await debouncedFn(e.target.value);
      setFruits(data);
    } else {
      setFruits([]);
    }
  };

  return (
    <>
      <h1>This is a Auto complete search text</h1>
      <input
        type="text"
        placeholder="Search fruits"
        className={styles.searchBox}
        onChange={(e) => handleOnChange(e)}
      />
      {fruits?.length > 0 && (
        <section className={styles.searchWrapper}>
          <ul className={styles.searchResult}>
            {fruits?.map((item) => (
              <li className={styles.searchItem} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
