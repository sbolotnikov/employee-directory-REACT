import React from "react";
import "./style.css";

function Title(props) {
  return <div className="title">
  <h1>Employees Directory</h1>
  <h4 id="textBlock">Click on carrots to sort results by heading or use the seach box to narrow your search! </h4>
  <figure>{props.children}</figure>
  </div>
}

export default Title;
