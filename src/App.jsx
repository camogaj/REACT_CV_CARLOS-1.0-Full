import { useEffect, useState } from "react";
import "./App.css";
import { Hero, About, Education, Experience, More } from "./components";
import { CV } from "./CV/CV";
import "./Matrix.css";
import "./responsive.css";
import {
  cambiarAEducacion,
  cambiarAExperiencia,
} from "./redux/actions/changeAction";
import store from "./redux/store";

const { hero, education, experience, languages, habilities } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  function showMatrix() {
    // geting canvas by Boujjou Achraf
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");

    //making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    //chinese characters - taken from the unicode charset
    var matrix =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    //converting the string into an array of single characters
    matrix = matrix.split("");

    var font_size = 10;
    var columns = c.width / font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (var x = 0; x < columns; x++) drops[x] = 1;

    //drawing the characters
    function draw() {
      //Black BG for the canvas
      //translucent BG to show trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "#0f0"; //green text
      ctx.font = font_size + "px arial";
      //looping over drops
      for (var i = 0; i < drops.length; i++) {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
          drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
      }
    }

    setInterval(draw, 35);
  }
  useEffect(() => {
    showMatrix();
  });
  return (
    <div className="App">
      <canvas id="c"></canvas>
      <div className="app-parent">
        <Hero hero={hero} />
        <About hero={hero.aboutMe} />
        <div className="group-button">
          <button
            className="button"
            onClick={() => {
              store.dispatch(cambiarAEducacion());
              setShowEducation(store.getState());
            }}
          >
            Educacion
          </button>
          <button
            className="button"
            onClick={() => {
              store.dispatch(cambiarAExperiencia());
              setShowEducation(store.getState());
            }}
          >
            Experiencia
          </button>
        </div>

        <div>
          {showEducation == 0 ? (
            <Education education={education} />
          ) : (
            <Experience experience={experience} />
          )}
        </div>
        <More languages={languages} habilities={habilities} />
      </div>
      {/* <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div> */}
    </div>
  );
}

export default App;
