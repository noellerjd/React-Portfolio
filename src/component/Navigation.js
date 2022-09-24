import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <h1>Portfolio</h1>
      <div>
        <ul className="links">
          <li>
            <Link className="link-text" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-text" to="/about">
              About
            </Link>
          </li>
          <li>Projects</li>
          <li>Contact Me</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
