import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <div>
      <div className="education">
        {education.map((item) => {
          return (
            <div className="card_education" key={JSON.stringify(item)}>
              <p className="name">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-book"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#00abfb"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                  <line x1="3" y1="6" x2="3" y2="19" />
                  <line x1="12" y1="6" x2="12" y2="19" />
                  <line x1="21" y1="6" x2="21" y2="19" />
                </svg>{" "}
                {item.name}
              </p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
