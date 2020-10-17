import React from "react";
import "../index.css";

export const CheckBox = (props) => {
  return (
    <li id="check">
      <input
        key={props.id}
        onClick={props.handleCheckChieldElement}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />{" "}
      {props.value}
    </li>
  );
};

export default CheckBox;
