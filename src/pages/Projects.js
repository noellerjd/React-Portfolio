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
    title: "PaybackPlan",
    link: "https://github.com/noellerjd/Payback-Plan",
    img: "https://user-images.githubusercontent.com/50307506/197901594-4446143f-4546-46c9-a46e-87232aa11da6.png"
  },
  {
    title: "ChatDat",
    link: "https://github.com/noellerjd/Chatdat",
    img: "https://github.com/noellerjd/Chatdat/raw/main/client/src/components/images/chatDat.png",
  },
  {
    title: "PWA-Text-Editor",
    link: "https://github.com/noellerjd/PWA-Text-Editor",
    img: "https://user-images.githubusercontent.com/50307506/196010407-1a80d192-9239-475f-9442-71ed632a998a.png",
  },
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
