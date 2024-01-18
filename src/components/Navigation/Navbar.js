import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">
        Accueil
      </NavLink>
      <NavLink to="/about">
        A Propos
      </NavLink>
    </nav>
  );
};

export default Nav;