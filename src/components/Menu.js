import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

const Menu = () => {
  return (
    <Link to="/" className="ui vertical menu">
      Back
    </Link>
  );
};

export default Menu;
