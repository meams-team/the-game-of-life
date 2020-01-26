import React from "react";
import "./styles.css";

// type
import { IBoxProp } from "../../entities/interfaces";

class Box extends React.Component<IBoxProp> {
  render() {
    const { value } = this.props;
    return <div className={`box box_${value}`} />;
  }
}

export default Box;
