let display = "";
let fatorNumerico = 0;
let operacao = "";

function metodoCustomizado(param) {
  if (typeof param === "number") {
    display = display + param;
  }
  if (typeof param === "string") {
    if (param === "-") {
      fatorNumerico = parseInt(display);
      display = "";
      operacao = "-";
    }
    if (param === "+") {
      fatorNumerico = parseInt(display);
      display = "";
      operacao = "+";
    }
    if (param === "=") {
      if (operacao === "+") {
        display = fatorNumerico + parseInt(display);
        operacao = "";
      }
      if (operacao === "-") {
        display = fatorNumerico - parseInt(display);
        operacao = "";
      }
    }
  }

  document.getElementById("display").textContent = display;
}
