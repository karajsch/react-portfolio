import React from "react";
import "../../App.css";
const cardStyle = {
  color: red;
};

const Card = (props) => {
  return Object.keys(props).map((value, index) => {
    return (
      <p style={cardStyle.card}>
        {value}:{props[value]}
      </p>
    );
  });
};

export default Card;