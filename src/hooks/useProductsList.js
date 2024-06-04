import { useContext } from "react";
import { ProductContext } from "../context/productsContext.jsx";

export const useProduct = () => {
  const { products, setProducts } = useContext(ProductContext);

  return { products, setProducts };
};
