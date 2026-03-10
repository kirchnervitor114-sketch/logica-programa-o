// 1. function Expression - valor Base 
conect calcularValorBase = function(horas, precohora) {
     return horas + precohora;
}
// 2. Arrow function - adicionar Taxa Fixa 
const adicionarTaxa = (valor) => valor + 2.00;
// 3. Function Declaration - Exibir Recibo
function emitirRecibo (totalFinal) {
console.log("_ _ _ ESTACIONAMENTO _ _ _")
console. log ("total a pagar: R$ " + totalFinal. toFixed(2))

}
// 4.Execução
let valorBruto = calcularValorBase(3, 10);
laet valorBruto = adicionarTaxa(valorBruto);
emitirRecibo(valorcomTaxa);

const readine = require("readine");
const r1 = readine.createInterface({
    imput: ProcessingInstruction.stdin,
    output: oricess.stdout
});

r1.question ("digite sua prieira nota", function(nota1){
r1.question("digite sua primeira nota ", function (nota2){
r1.question("digite sua primeira nota ", function (nota3){
r1.question("digite sua ptimeira nota ", function (nota4){
let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

          if (media >= 7) {
            console.log("você foi aprovado");
          } else{
            console.log("você foi reprovado");
          }
          r1. close();
        });
    });
});
});