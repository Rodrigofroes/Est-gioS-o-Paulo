// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


const dados = require('./db03.json');

let maior = -99999;
let menor = 99999;

let maiorDia = 0;
let menorDia = 0;

let somaTotal = 0;
let diasComFaturamento = 0;
let mediaValor = 0;

for (let i = 0; i < dados.faturamentoMensal.length; i++) {
    const faturamento = dados.faturamentoMensal[i].faturamento;

    if (faturamento > maior) {
        maior = faturamento;
        maiorDia = dados.faturamentoMensal[i];
    }

    if (faturamento < menor) {
        menor = faturamento;
        menorDia = dados.faturamentoMensal[i];
    }

    if(faturamento > 0){
        somaTotal += faturamento;
        diasComFaturamento++;
    }
}

mediaValor = somaTotal / diasComFaturamento;

let diasAcimaDaMedia = 0;
let dias = [];

for(let i = 0; i < dados.faturamentoMensal.length; i++){
    if(dados.faturamentoMensal[i].faturamento > mediaValor){
        diasAcimaDaMedia++;
        dias.push(dados.faturamentoMensal[i]);
    }
}

console.log("Maior faturamento:", maior, "no dia:",  maiorDia.data );
console.log("Menor faturamento:", menor, "no dia:",  menorDia.data );
console.log("Soma total:", somaTotal);
console.log("Dias com faturamento:", diasComFaturamento);
console.log("Média de faturamento:", mediaValor.toFixed(2));
console.log("Número de dias com faturamento acima da média mensal:", diasAcimaDaMedia);
console.log("Dias com faturamento acima da média:", dias);

