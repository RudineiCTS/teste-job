const readline = require('readline');
const fs = require('fs');
// /1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

//necessario chamar a função para testar -------------------------------------------------------------------
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
//descomente o codigo para testar -------------------------------------------------------------------
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

    let result = [];
    for(item in data){
        if(data[item].faturamento > med){
            result.push(data[item].dia);
        }
    }
    console.log('Dias em que o valor de faturamento foi superior à média:', result);

}
//descomente o codigo para testar -------------------------------------------------------------------
// readJsonFaturamento();


// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53
//Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

function calcularPercentualFaturamento(estados) {
    const faturamentoTotal = estados.reduce((total, estado) => total + estado.faturamento, 0);

    console.log(`Faturamento total: R$ ${faturamentoTotal.toFixed(2)}`);

    estados.forEach(estado => {
        const percentual = (estado.faturamento / faturamentoTotal) * 100;
        console.log(`${estado.nome}: ${percentual.toFixed(2)}%`);
    });
}

const faturamentoPorEstado = [
    { nome: "SP", faturamento: 67836.43 },
    { nome: "RJ", faturamento: 36678.66 },
    { nome: "MG", faturamento: 29229.88 },
    { nome: "ES", faturamento: 27165.48 },
    { nome: "Outros", faturamento: 19849.53 }
];
////descomente o codigo para testar -------------------------------------------------------------------
//calcularPercentualFaturamento(faturamentoPorEstado);

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;


rl.question('Digite alguma coisa para ser invertida: ', (answer) => {
    invertString(answer);
    rl.close();
});

function invertString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log('String invertida:', reversed);
}