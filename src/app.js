// eslint-disable-next-line;
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function generateExcuse() {
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
  }

  // Generar y mostrar la primera excusa al cargar la página
  document.getElementById("excuse").innerHTML = generateExcuse();

  // Función para generar y mostrar una nueva excusa
  window.generateNewExcuse = function() {
    document.getElementById("excuse").innerHTML = generateExcuse();
  };
};
