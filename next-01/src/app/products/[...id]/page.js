import React from "react";

const ProductDetail = ({ params }) => {
  console.log(params);
  const { id } = params;
  return (
    <div>
      <h1>Chi tiết sản phẩm : {id}</h1>
      <h2>Chuyên mục: {id[0]}</h2>
      <h2>Sản phẩm: {id[1]}</h2>
    </div>
  );
};

export default ProductDetail;
