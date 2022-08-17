import React from "react";
import "./About.css";
const About = ({ hero }) => {
  return (
    <div className="about">
      <p>{hero}</p>
    </div>
  );
};
export default About;
