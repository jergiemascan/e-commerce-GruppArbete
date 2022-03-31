import React from "react";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const CtaWrapper = (props) => {
  return (
    <Fragment>
      <div className="cta">{props.children}</div>
      <Backdrop></Backdrop>
    </Fragment>
  );
};

export default CtaWrapper;
