let display = "";
let displayHistorico = "";
let fatorNumerico = 0;
let operacao = "";

function metodoCustomizado(param) {
  if (typeof param === "number") {
    display = display + param;
    displayHistorico = displayHistorico + param;
  }
  if (typeof param === "string") {
    if (param === "-") {
      fatorNumerico = parseInt(display);
      display = "";
      operacao = "-";
      displayHistorico = displayHistorico + "-" + display;
    }
    if (param === "+") {
      fatorNumerico = parseInt(display);
      display = "";
      operacao = "+";
      displayHistorico = displayHistorico + "+" + display;
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
  document.getElementById("displayHistorico").textContent = displayHistorico;
}
