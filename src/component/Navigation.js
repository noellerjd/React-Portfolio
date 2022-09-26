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
          <li>
            <Link className="link-text" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="link-text" to="/contact">
              Contact Me
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/noellerjd"
              className="link-text"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
