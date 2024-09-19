/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//array con cada elemento que se necesitará
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

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = generateAnExcuse(
    who,
    action,
    what,
    when
  );
};

function generateNumber(anArray) {
  let num = Math.floor(Math.random() * anArray.length);
  return num;
}

function generateAnExcuse(array1, array2, array3, array4) {
  let newExcuse = "";
  newExcuse = `${array1[generateNumber(array1)]} ${
    array2[generateNumber(array2)]
  } ${array3[generateNumber(array3)]} ${array4[generateNumber(array4)]}`;
  console.log(newExcuse);
  return newExcuse;
}
