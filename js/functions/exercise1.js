const PromptSync = require('prompt-sync')
const prompt = PromptSync()

const question =  Number(prompt('Deseja converter uma temperatura? (1) Sim (2) Não: '));

if(isNaN(question)) {
    console.log('Valor inserido não é um número!')
} else {
    const question = prompt('Você deseja converter para qual temperatura (C) Celsius (F) Farenheit? ').toUpperCase()

    if(question == 'C' || question == 'F') {
        if(question == 'F'){
            const celsius = Number(prompt('Digite o valor em Celsius para converter para Farenheit: '))
            
            if(isNaN(celsius)) {
                console.log('Valor inserido não é um número!')
            } else {
                farenheit(celsius);
            }
        } else if(question == 'C') {
            const farenheit = Number(prompt('Digite o valor em Farenheit para converter para Celsius: '))
            
            if(isNaN(farenheit)) {
                console.log('Valor inserido não é um número!')
            } else {
                celsius(farenheit);
            }
        } else {
            console.log('Algum erro ocorreu!')
        }
    } else {
        console.log('Valor inserido inválido!')
    }

}

function celsius(farenheit) {
    const celsius = (farenheit - 32) * 5/9
    console.log(`A conversão de Farenheit para Celsius é: ${celsius}`)
}

function farenheit(celsius) {
    const farenheit = (celsius * 9/5) + 32
    console.log(`A conversão de Celsius para Farenheit é: ${farenheit}`)
}