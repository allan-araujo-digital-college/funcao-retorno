let a = 1;
let b = "1";
let c = true;
let d = [];
// JSON (JavaScript Object Notation)
let e = {};
// let aluno = {
//   nome: "Allan",
//   idade: 33,
// };

// console.log(aluno);
// console.log(aluno.idade);
// aluno.idade = 22;
// console.log(aluno);
// console.log(aluno.idade);

// console.log(123123)
// document.getElementById("abcd").textContent = "asudhaudhsa";]

function dobraValor(parametro) {
  return parametro * 3;
}

function allan() {
  let objeto = { nome: "abcd", idade: 99, metodo: dobraValor };
  return objeto;
}
let variavelMetodo = allan();
// console.log(variavelMetodo.idade);
// console.log(allan().idade);
// console.log(allan().nome);
// console.log(dobraValor(3));
// console.log(allan().metodo(3));

// function carroca() {
//   let objeto = {
//     textContent: 123,
//   };
//   return objeto;
// }

// let document2 = {
//   getElementById: carroca,
// };

// console.log(document2.getElementById().textContent);

// function funcaoAbcd() {
//   let pessoa = { nome: "joao", textContent: 199 };
//   return pessoa;
// }

// let document1 = { nome: "objeto novo", getElementById: funcaoAbcd };

// console.log(document1);
// console.log(document1.getElementById);
// console.log(document1.getElementById());
// console.log(document1.getElementById().textContent);

// document1.nome = 'abcd'
// console.log(document1);

// console.log(document.getElementById("display").textContent);
// document.getElementById("display").textContent = 123;

// http://localhost:5500/index.html?query=123

function irParaProximaPagina(pagina) {
  window.location.replace(pagina);
}
