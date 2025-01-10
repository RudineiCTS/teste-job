const readline = require('readline');
const fs = require('fs');
// /1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?
function sumValue(){
    const index =13
    let soma = 0
    let k= 0 
    
    while (k < index) {
        k++;
        soma += k;
        console.log(soma) //resultado= 91
    }
}

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
function findItemInFibonacci(value){
    let fibonacci = [0, 1];

    while (fibonacci[fibonacci.length - 1] <= value) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
        if (fibonacci[fibonacci.length - 1] === value) {
            console.log(`${value} pertence à sequência de Fibonacci.`);
            break;
        } else if(fibonacci[fibonacci.length -1 ] > value){
            console.log(`${value} não pertence à sequência de Fibonacci.`);
            break;
        }
    }
}


const rl = readline.Interface({
    input:process.stdin,
    output: process.stdout
})

// rl.question('Digite um número para verificar se ele está na sequência de Fibonacci: ', (answer) => {
//     findItemInFibonacci(parseInt(answer));
//     rl.close();
// });


// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

function readJsonFaturamento(){
    const file = './faturamento.json';

    fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;

        const {faturamento_diario} = JSON.parse(data);
        findMinorValue(faturamento_diario)
        findMaxValue(faturamento_diario)
        findMedia(faturamento_diario)
        }
    )
}
function findMinorValue(data) { 
    let min = data[0].faturamento;
    for(let i = 1; i < data.length; i++){
        if(data[i].faturamento < min){
            min = data[i].faturamento;
        }
    }
    console.log('Menor valor de faturamento:', min);

}
function findMaxValue(data) {
    let max = data[0].faturamento;
    for(let i = 1; i < data.length; i++){
        if(data[i].faturamento > max){
            max = data[i].faturamento;
        }
    }
    console.log('Maior valor de faturamento:', max);

}
function findMedia(data){
    const media = data.reduce((acc, currentValue, index)=>{
        if(index === 1){
            return acc.faturamento + currentValue.faturamento
        }
        return acc + currentValue.faturamento;
    })
    const med  =media/data.length

    if()

}
readJsonFaturamento();