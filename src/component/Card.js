import React from "react";

export default function Card(props) {
  return (
    <div className="project-card">
      <a href={props.link} alt={props.title} target="_blank" rel="noreferrer">
        <img className="card-img" src={props.img} alt={props.title}></img>
      </a>
      <h1>{props.title}</h1>
    </div>
  );
}
