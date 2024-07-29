/* eslint-disable no-console */
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Genera y muestra una excusa aleatoria
function generateAndDisplayExcuse() {
  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "my phone", "the car"];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const whoIndex = Math.floor(Math.random() * who.length);
  const actionIndex = Math.floor(Math.random() * action.length);
  const whatIndex = Math.floor(Math.random() * what.length);
  const whenIndex = Math.floor(Math.random() * when.length);

  const excuse = `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
  document.getElementById("excuse").innerText = excuse;
}

window.onload = () => {
  try {
    generateAndDisplayExcuse();

    document
      .getElementById("generateExcuseButton")
      .addEventListener("click", generateAndDisplayExcuse);
  } catch (error) {
    console.error("Error generating excuse:", error);
  }
};
