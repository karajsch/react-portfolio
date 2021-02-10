import React from "react";

const cardStyle = {
    backgroundColor: "lightpink",
    color: "blue"
};

const Card = (props) => {
//   return Object.keys(props).map((value, index) => {
    return (
        <div style={cardStyle}>
      
    
      <h2>{props.title}</h2>
      <img src={props.image} width="50%" />
      <br />
      <a href={props.github}>Github</a>
      <br />
      <a href={props.url}>Deployment</a>
      <br />
      <p>{props.description}</p>

      </div>
    );
//   });
};

export default Card;
