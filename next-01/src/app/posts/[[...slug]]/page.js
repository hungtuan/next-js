import React from "react";

const Posts = ({ params }) => {
  const { slug } = params;
  console.log(slug);
  return (
    <div>
      <h1>Tin tức</h1>
    </div>
  );
};

export default Posts;
