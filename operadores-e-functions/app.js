const readline = require ('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});



readline.question('Favor informar um número : ' , (numero1) =>{
    try{
        Number.parseFloat(numero1)
    }catch(e){
        console.log('')
    }
    
})