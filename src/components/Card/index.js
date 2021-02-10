import React from "react";
const cardStyle = {
    backgroundColor: "lightgrey",
    color: "green"
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
