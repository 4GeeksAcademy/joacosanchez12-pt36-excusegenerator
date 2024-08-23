function generarNumeroAleatorio(indice_mayor) {
  let numero_aleatorio = Math.random() * indice_mayor;
  numero_aleatorio = Math.round(numero_aleatorio);
  return numero_aleatorio;
}

window.onload = function() {
  let numero_aleatorio;
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

  let elemento_html = document.querySelector("#excuse");
  //alert(elemento_html);

  let indice_mayor_who = who.length - 1;
  let primera_frase = who[generarNumeroAleatorio(indice_mayor_who)];

  //alert(indice_mayor_action);
  let indice_mayor_action = action.length - 1;
  let segunda_frase = action[generarNumeroAleatorio(indice_mayor_action)];

  //alert(indice_mayor_what);
  let indice_mayor_what = what.length - 1;
  let tercera_frase = what[generarNumeroAleatorio(indice_mayor_what)];

  //alert(indice_mayor_when);
  let indice_mayor_when = when.length - 1;
  let cuarta_frase = when[generarNumeroAleatorio(indice_mayor_when)];

  document.querySelector("#excuse").innerHTML =
    primera_frase +
    " " +
    segunda_frase +
    " " +
    tercera_frase +
    " " +
    cuarta_frase +
    " ";
};
