/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Shimmer } from "../shimmer";

import styles from "./index.module.css";

const Product = ({ product }) => {
  return (
    <div className={styles.productWrapper}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.product_image}
      />
      <div className={styles.product_details}>
        <span className={styles.productName}>{product.title}</span>
        <span className={styles.price}>${product.price}</span>
      </div>
    </div>
  );
};

export const LoadProducts = () => {
  const [productList, setProductList] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  const fetchProducts = async () => {
    setIsLoading(true);
    const prods_raw = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${count}`
    );
    const prod = await prods_raw.json();
    setProductList(prod);
    setProductList((prev) => ({
      ...prev,
      skip: prev.skip,
      products:
        productList?.products?.length > 0
          ? [...productList.products, ...prod.products]
          : [...prev.products],
    }));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  const handleClick = () => {
    if (count <= productList.total) {
      setCount(count + 10);
    }
  };

  const renderProducts = productList?.products?.map((product) => (
    <Product product={product} key={product.id} />
  ));

  return (
    <>
      <div className={styles.appWrapper}>
        <div className={styles.prod}>
          <>{renderProducts}</>
          {isLoading && (
            <>
              {Array(10)
                .fill(0)
                .map((i, idx) => (
                  <Shimmer
                    key={idx}
                    type="rectangle"
                    shimmerProps={{
                      height: "260px",
                      width: "240px",
                      borderProps: "1px solid black",
                    }}
                  />
                ))}
            </>
          )}
        </div>
        <div className={styles.button}>
          <button disabled={isLoading || count === 90} onClick={handleClick}>
            {isLoading ? "Loading" : "Load More Products"}
          </button>
        </div>
      </div>
    </>
  );
};
