/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef, useCallback } from "react";

import styles from "./index.module.css";

const Product = ({ product, innerRef }) => {
  return (
    <div className={styles.productWrapper} ref={innerRef ?? null}>
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
  const observer = useRef();

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

  const lastProductRef = useCallback(
    (node) => {
      if (isLoading) return;

      observer?.current?.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setCount((count) => count + 10);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  const renderProducts = productList?.products?.map((product) => {
    if (productList?.products?.length === product.id) {
      return (
        <Product product={product} innerRef={lastProductRef} key={product.id} />
      );
    }
    return <Product product={product} key={product.id} />;
  });

  return (
    <>
      <div className={styles.appWrapper}>
        <div className={styles.prod}>{renderProducts}</div>
      </div>
    </>
  );
};
