// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Questão 02</h1>`;

function desconto(valor: number, desco : number){
  let resul = (valor * desco)/100
  return valor - resul;
}

let v = +prompt("qual o valor?");
let d = +prompt("qual o desconto?");
document.write(`valor para ser pagor  R$${desconto(v,d)},00 `)

