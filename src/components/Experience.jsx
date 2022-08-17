import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div className="card_experience">
      {experience.map((item) => {
        return (
          <div>
            <p>{item.where}</p>
            <p>{item.name}</p>
            <p>{item.date}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
