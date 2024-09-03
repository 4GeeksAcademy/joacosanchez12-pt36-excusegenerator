import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Define los arrays pronoun, adj y noun
let pronoun = ["the", "sis"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

// Creacion de la función se ejecuta cuando la página web ha terminado de cargarse-Andres-Arreaza.
window.onload = function() {
  const list = document.getElementById("list");
  let domains = [];
  // Creacion de los for anidados para recorrer los arrays-Andres-Arreaza.
  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        let domain = pronoun[i] + adj[a] + noun[b] + ".com";
        domains.push(domain);
      }
    }
  }

  // Imprimir los dominios en el orden especificado.
  for (let i = 0; i < domains.length; i++) {
    list.innerHTML += `<li class="list-group-item">${domains[i]}</li>`; // Agregar al HTML
  }
};
