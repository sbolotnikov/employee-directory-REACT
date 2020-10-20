import React from "react";
import "./style.css";
var FontAwesome = require('react-fontawesome');

function SortName(props) {
    if (props.status === 1) { return <span><FontAwesome name={"sort-alpha-asc"} size="lg" style={{color:'green'}} /></span> }
    else if (props.status === 2) { return <span><FontAwesome name={"sort-alpha-desc"} size="lg" style={{color:'red'}} /></span> }
    else if (props.status === 0){ return <span> </span> }
}

export default SortName;
