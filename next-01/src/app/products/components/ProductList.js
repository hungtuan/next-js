"use client";

import { useRef, useState } from "react";

const ProductList = () => {
  const [title, setTitle] = useState(true);
  const handleHidden = () => {
    setTitle((title) => (title = !title));
  };
  return (
    <div>
      <h1>Product Lists</h1>
      {title && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          illo repudiandae modi ullam doloribus vitae quas amet a, tempora rem?
        </p>
      )}
      <button onClick={handleHidden}>Thu gọn</button>
    </div>
  );
};

export default ProductList;
