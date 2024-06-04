import { useEffect } from "react";
import { useProduct } from "../../hooks/useProductsList";
const Product = () => {
  const { products, setProducts } = useProduct();

  const fetchProducts = () => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((data) => setProducts(data.title));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div>Product List:</div>
      <div>{products}</div>
    </>
  );
};

export default Product;
