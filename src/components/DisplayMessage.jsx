import React from "react";

const DisplayMessage = ({ classValue, children }) => {
  return <span className={`${classValue}`}> {children}</span>;
};

export default DisplayMessage;
