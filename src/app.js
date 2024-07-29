// eslint-disable-next-line;
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Genera una excusa aleatoria
function generateExcuse(whoArray, actionArray, whatArray, whenArray) {
  const whoIndex = Math.floor(Math.random() * whoArray.length);
  const actionIndex = Math.floor(Math.random() * actionArray.length);
  const whatIndex = Math.floor(Math.random() * whatArray.length);
  const whenIndex = Math.floor(Math.random() * whenArray.length);

  return `${whoArray[whoIndex]} ${actionArray[actionIndex]} ${whatArray[whatIndex]} ${whenArray[whenIndex]}`;
}

// Muestra la excusa generada en el elemento HTML
function displayExcuse(excuse) {
  document.getElementById("excuse").innerText = excuse;
}

// Función principal que se ejecuta al cargar la página
function main() {
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

  try {
    const initialExcuse = generateExcuse(who, action, what, when);
    displayExcuse(initialExcuse);

    // Agrega el evento para generar nuevas excusas
    document
      .getElementById("generateExcuseButton")
      .addEventListener("click", () => {
        const newExcuse = generateExcuse(who, action, what, when);
        displayExcuse(newExcuse);
      });
  } catch (error) {
    console.error("Error generating excuse:", error);
  }
}

// Ejecuta la función principal cuando la ventana se ha cargado
window.onload = main;
