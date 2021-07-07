import React from "react";
import "./style.css";

//pass in PROPS to our card variable
const Card = (props) => {
  return (
    <div className="col mb-5">
      <div className="card h-100 border-light">
        <h2 className="card-header">
          <i class={props.icon}></i> {props.title}
        </h2>
        <img
          src={props.image}
          className="card-img-top"
          alt="Screenshot of project"
        />
        <div className="card-body">
          <h6 className="card-subtitle mb-3 tools">
            <u>Technologies</u>: {props.tools}
          </h6>
          <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer d-flex justify-content-around">
          <a href={props.github} className="card-link">
            <i class="fas fa-code-branch"></i> GitHub Repo
          </a>
          <a href={props.url} className="card-link">
            <i class="fas fa-desktop"></i> Deployed Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
