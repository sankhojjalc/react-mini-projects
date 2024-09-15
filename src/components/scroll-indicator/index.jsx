import { useState, useEffect } from "react";
import styles from "./index.module.css";

export const ScrollIndicator = () => {
  const [data, setData] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=100");
    const dataJson = await data.json();
    setData(dataJson.products);
  };

  const calcScrollPercentage = () => {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", calcScrollPercentage);

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.topContainer}>
        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      {data.map((item) => (
        <div key={item.id} className={styles.items}>
          {item.title}
        </div>
      ))}
    </>
  );
};
