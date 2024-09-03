// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53
// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 

const dados = require('./db04.json');

let somaTotal = 0;

for(let i = 0; i < dados.faturamentoMensal.length; i++) {
    somaTotal += dados.faturamentoMensal[i].faturamento;
}

function calcularPorcentagem(faturamento) {
    return (faturamento / somaTotal) * 100;
}


for(let i = 0; i < dados.faturamentoMensal.length; i++){
    const faturamento = dados.faturamentoMensal[i].faturamento;
    const porcentagem = calcularPorcentagem(faturamento);
    console.log(`Estado: ${dados.faturamentoMensal[i].estado} - Faturamento: ${faturamento} - Porcentagem: ${porcentagem.toFixed(2)}%`);
}