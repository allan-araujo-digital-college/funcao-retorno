let contador = 0;
function clickDoBotao() {
  console.log(contador++);
}

function onFocus(valor) {
  console.log("onFocus" + valor);
}

function onBlur(valor) {
  console.log("onBlur" + valor);
}

function onChange(parametro1) {
  console.log("onChange ", parametro1.value);
}
