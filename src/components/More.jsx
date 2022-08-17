import React from "react";
import "./More.css";
const More = ({ languages, habilities }) => {
  return (
    <div>
      <div>
        {languages.map((item) => {
          return (
            <div className="card_language">
              <p>Idioma: {item.language}</p>
              <p>Nivel: {item.wrlevel}</p>
            </div>
          );
        })}
      </div>
      <div className="card_habilities">
        {habilities.map((item) => {
          return (
            <div>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default More;
