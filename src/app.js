/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const who = ["El gato", "Mi mamá", "El encargado", "Mi novio"];
  const action = ["comió", "orinó", "aplastó", "rompió"];
  const what = ["mi tarea", "mi teléfono", "mi compu"];
  const when = [
    "antes de la clase",
    "cuando yo estaba durmiendo",
    "mientras cocinaba",
    "durante la comida",
  ];

  function getExcuse() {
    const whoIndex = Math.floor(Math.random() * who.length);
    const actionIndex = Math.floor(Math.random() * action.length);
    const whatIndex = Math.floor(Math.random() * what.length);
    const whenIndex = Math.floor(Math.random() * when.length);

    return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
  }

  document.getElementById("excuse").innerHTML = getExcuse();
  console.log("Hello Rigo from the console!");
};
