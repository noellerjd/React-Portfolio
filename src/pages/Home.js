import React, { useState } from "react";
import Header from "../component/Header";
import me from "../assets/me.png";

function Home() {
  return (
    <section className="home">
      <div className="home-container">
        <div className="intro">
          <div className="intro-card">
            <h1>
              I AM
              <br />
              JUSTIN NOELLER
            </h1>
          </div>
        </div>
      </div>
      <img className="justin-pic" src={me} alt="Justin" />
    </section>
  );
}

export default Home;
