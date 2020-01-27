import React from "react";

// styles
import "./box.css";

// type
import { IBoxProp } from "../../entities/gameOfLifeInterfaces";

const Box = ({ value }: IBoxProp) => {

  return <div className={`box box-${value}`} />;
};

export default Box;
