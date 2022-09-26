import React, { useState } from "react";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About Me</h1>
        <p className="about-text">
          I'm a Full-Stack Developer based in Colorado. My Interest in
          programming came at a young age when I got my hands on one of my mom's
          old C++ for dummies books. I later enrolled myself into a Full-Stack
          bootcamp through the University of Denver in April, 2022. For me,
          coding has quickly became a perfect union of my favorite passions,
          computers and design. Whether it's coding with a team, coding with my
          friends, or coding just for fun. It's hard to find myself wanting
          anything more!
        </p>
        <p className="about-text" id="thanks">
          Thanks for taking a look at my Portfolio!
        </p>
      </div>
    </div>
  );
}

export default About;
