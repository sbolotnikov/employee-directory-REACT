import React, { Component } from "react";
import "./style.css";

class EmployeeItem extends Component {

  render() {
    let props = this.props;
    return (
      <tr>
        <td className="img-container">
          <img alt={props.name} src={props.image} />
        </td>
        <td>{props.name}</td>
        <td>{props.phone}</td>
        <td><a href={"mailto:"+props.email}>{props.email}</a></td>
        <td>{props.dob}</td>
      </tr>
    );
  }
}

export default EmployeeItem;
