const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log('Esse programa vai checar se você tem é maior de 18 anos e tem habilitação para saber se você pode entrar no kart');
console.log('Alem das suas verificações , precisamos verificar se você esta na lista de presença de horario');


readline.question('Qual o ano do seu nascimento?' , ano =>{
    if(ano > 2004 ){
        console.log('Você não possui 18 anos');        
    }else{
        readline.question('Você possui habilitação? (Sim/Não)' , temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Você não tem habilitação para entrar no hart');
            }else{
                readline.question('Qual seu nome? ', nome =>{
                    switch(nome){
                        case 'Douglas':
                            console.log('Bem Vindo ao Kart Douglas');
                            break;
                        case 'Rafael' :
                            console.log('Bem Vindo ao Kart Rafael');
                            break;
                        case 'Irving' :
                            console.log('Bem Vindo ao Kart Irving');
                            break;
                        case 'Louis' :
                            console.log('Bem Vindo ao Kart Louis');
                            break;     
                        default:
                            console.log('Seu nome não foi identificado na lista');
                            break;                            
                    }
                }
            )}
        })
    }
})