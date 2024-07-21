/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function aleatorio(lista) {
    let numAleatorio = Math.floor(Math.random() * lista.length);
    return lista[numAleatorio] + " ";
  }

  let who = ["Chuck Norris", "Mi abuela", "Jane Fonda", "Mi perro Ricky"];
  let action = ["se comió", "destruyó", "aventó por la ventana", "destruyó"];
  let what = ["mi tarea", "mi carro", "mi televisión"];
  let when = [
    "antes de clase",
    "mientras dormía",
    "cuando estaba fuera",
    "durante mis clases de pilates",
    "mientras atendía una llamada"
  ];

  let excuse =
    aleatorio(who) + aleatorio(action) + aleatorio(what) + aleatorio(when);

  let elementExcuse = document.querySelector("#excuse");

  elementExcuse.innerHTML = excuse;

  let excuseButton = document.querySelector("#generate-excuse");

  excuseButton.addEventListener("click", () => {
    let newExcuse =
      aleatorio(who) + aleatorio(action) + aleatorio(what) + aleatorio(when);
    elementExcuse.innerHTML = newExcuse;
  });
};
