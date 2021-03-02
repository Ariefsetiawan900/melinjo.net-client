import React from "react";
import { Link } from "react-router-dom";

import propTypes from "prop-types";

import './style.css'

const ButtonC = (props) => {
  const className = [props.className, "btnCustomTes"];
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === "link") {
    return (
      <Link
        className={className.join(" ")}
        to={props.href}
        style={props.style,{width:props.width,padding:props.padding}}
        onClick={onClick}
        title={props.title}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={className.join(" ")}
      style={props.style,{width:props.width,padding:props.padding}}
      onClick={onClick}
      title={props.title}
    >
      {props.children}
    </button>
  );
};

ButtonC.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  href: propTypes.string,
  className: propTypes.string,
  onClick: propTypes.func,
};

export default ButtonC;
