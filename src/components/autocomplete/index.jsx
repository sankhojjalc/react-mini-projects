import { useState } from "react";

import { getFruitsData, debounce, cacheData } from "./utils";
import styles from "./index.module.css";

const debouncedFn = debounce(getFruitsData, 300);
const cacheResult = cacheData(debouncedFn);

export const AutoCompleteSearch = () => {
  const [fruits, setFruits] = useState([]);

  const handleOnChange = async (e) => {
    if (e.target.value !== "") {
      const data = await cacheResult(e.target.value);
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
