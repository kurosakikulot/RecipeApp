import React from "react";
import Logo from "../images/Logo.png";

export default function Nav() {
  return (
    <nav className="transparent z-depth-0 container">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo black-text logo">
          <img src={Logo} />
        </a>
      </div>
    </nav>
  );
}
