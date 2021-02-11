import React from "react";
import "./style.css";

const Card = (props) => {
  //   return Object.keys(props).map((value, index) => {
  return (
    <div class="col mb-4">
      <div className="card h-100">
        <h1 className="card-header">{props.title}</h1>
        <img
          src={props.image}
          className="card-img-top"
          alt="Screenshot of project"
        />
        <div className="card-body">
          <h6 className="card-subtitle mb-3 text-muted">
            Tools: {props.tools}
          </h6>
          <p className="card-text">{props.description}</p>
          </div>
          <div class="card-footer d-flex justify-content-around">
          <a href={props.github} className="card-link"><i class="fas fa-code-branch"></i> GitHub Repo</a>
            <a href={props.url} className="card-link"><i class="fas fa-desktop"></i> Deployment</a>
          </div>
        </div>
      </div>

  );
  //   });
};

export default Card;
