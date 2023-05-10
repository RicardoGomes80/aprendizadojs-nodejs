// const readLine = require('readLine').createInterface({
//     input : process.stdin,
//     output: process.stdout
// });


const readline  = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const minhaPrimeiraConstanteString = 'Minha Primeira Constante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
readline.question('Informe sua idade:' , input => {
    leituraDeCampo = input;
    console.log('o Usuario digitou: ' + leituraDeCampo)
});

