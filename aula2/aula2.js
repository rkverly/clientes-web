//window.confirm("Você deseja realmente fazer essa operação?");

var leitor = require ("prompt-sync")();
// var nome = leitor("Digite seu nome:");
// var idade = leitor("Digite sua idade: ");

// console.log(`Nome: ${nome}`);
// console.log(`Idade: ${idade}`);

var parada = leitor('Informe o número: ');

for(var i= 0; i<parada; i++){
    console.log(`Número: ${i}`);
}

