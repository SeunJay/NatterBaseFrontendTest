import React, { Fragment } from "react";
import "./Body.css";
//import { API } from "../../config";

const Body = ({ name }) => {
  return (
    <Fragment>
      <h3 className="salutation">Welcome, {name}</h3>
    </Fragment>
  );
};

export default Body;
