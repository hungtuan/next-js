// Loading.jsx
import React from "react";
import { css } from "@emotion/react";
import { BounceLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = () => {
  return (
    <div className="sweet-loading">
      <BounceLoader css={override} size={60} color={"#123abc"} loading={true} />
    </div>
  );
};

export default Loading;
