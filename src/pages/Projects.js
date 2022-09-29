import React, { useState } from "react";
import Card from "../component/Card";
import ecommerce from "../assets/ECommerce.png";
import sqlTracker from "../assets/SQLtracker.PNG";
import portfolioV1 from "../assets/portfoliov1.PNG";
import portfolioV2 from "../assets/React-Portfolio.PNG";
import passgen from "../assets/password-generator.PNG";
import weatherDash from "../assets/weather-dash.PNG";
import socialMedia from "../assets/social-media-backend.PNG";

// const projectOne = {
//   title: "Test",
//   link: "React-Portfolio",
//   img: "https://via.placeholder.com/500",
// };

const projectList = [
  {
    title: "React-Portfolio",
    link: "https://github.com/noellerjd/React-Portfolio",
    img: portfolioV2,
  },
  {
    title: "Social Network Backend",
    link: "https://github.com/noellerjd/Social-Network-Backend",
    img: socialMedia,
  },
  {
    title: "HTML+CSS Portfolio",
    link: "https://github.com/noellerjd/portfolio",
    img: portfolioV1,
  },
  {
    title: "ECommerce Backend",
    link: "https://github.com/noellerjd/ECommerce-Back-End",
    img: ecommerce,
  },
  {
    title: "SQL Employee Tracker",
    link: "https://github.com/noellerjd/SQL-Employee-Tracker",
    img: sqlTracker,
  },
  {
    title: "Password Generator",
    link: "https://github.com/noellerjd/Password-Generator",
    img: passgen,
  },
  {
    title: "Weather Dashboard",
    link: "https://github.com/noellerjd/Weather-Dashboard",
    img: weatherDash,
  },
];

function Projects() {
  return (
    <section>
      <div className="project-container">
        {projectList.map((proj, i) => {
          return (
            <Card key={i} title={proj.title} link={proj.link} img={proj.img} />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;