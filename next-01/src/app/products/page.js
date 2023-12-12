import React from "react";
import ProductList from "./components/ProductList";

export const metadata = {
  title: "Sản Phẩm",
};

const Products = () => {
  console.log("Meta");
  return <ProductList />;
};

export default Products;
