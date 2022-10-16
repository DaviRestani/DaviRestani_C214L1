const Calculadora = require('./src/calculadora');
const Calc = require('./src/calculadora');

let aSoma = Calculadora.adicao(1);
let bSoma = Calculadora.adicao(2);

let aSubtracao = Calculadora.subtracao(1);
let bSubtracao = Calculadora.subtracao(2);

let aMulti = Calculadora.multiplicacao(1);
let bMulti = Calculadora.multiplicacao(2);

let aDiv = Calculadora.divisao(1);
let bDiv = Calculadora.divisao(2);

let aPot = Calculadora.potenciacao(1);
let bPot = Calculadora.potenciacao(2);

console.log(aSoma);
console.log(bSoma);

console.log(aSubtracao);
console.log(bSubtracao);

console.log(aMulti);
console.log(bMulti);

console.log(aDiv);
console.log(bDiv);

console.log(aPot);
console.log(bPot);