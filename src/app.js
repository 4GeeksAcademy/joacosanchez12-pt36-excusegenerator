
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  function refreshExcuse(newExcuse) {
    document.getElementById("excuse").innerHTML = newExcuse;
  }
  function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  function generateExcuse() {
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

    const randomWho = getRandomElement(who);
    const randomAction = getRandomElement(action);
    const randomWhat = getRandomElement(what);
    const randomWhen = getRandomElement(when);

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  }
  document.getElementById("excuse").innerHTML = generateExcuse();
  document
    .getElementById("setExcuse")
    .addEventListener("click", () => refreshExcuse(generateExcuse()));
};
