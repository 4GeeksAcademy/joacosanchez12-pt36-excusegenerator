/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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

  let whoId = Math.floor(Math.random() * who.length); //Generate a whole number from 0 to 3
  let actionId = Math.floor(Math.random() * action.length); //Generate a whole number from 0 to 3
  let whatId = Math.floor(Math.random() * what.length); //Generate a whole number from 0 to 2
  let whenId = Math.floor(Math.random() * when.length); //Generate a whole number from 0 to 4

  let excuse =
    who[whoId] +
    " " +
    action[actionId] +
    " " +
    what[whatId] +
    " " +
    when[whenId];
  document.getElementById("excuse").innerText = excuse;
};
