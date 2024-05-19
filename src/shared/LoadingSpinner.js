import React from "react";

import '../index.css';
const LoadingSpinner = (props) => {
    console.log(props);
  return (
    <div className={props.className}>
      <div></div>;
    </div>
  );
};

export default LoadingSpinner;
