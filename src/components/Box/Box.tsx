import React from "react";
import "./box.css";

// type
import { IBoxProp } from "../../entities/interfaces";

const Box = (props: IBoxProp) => {
  const { value } = props;
  
  return <div className={`box box-${value}`} />;
};

export default Box;
