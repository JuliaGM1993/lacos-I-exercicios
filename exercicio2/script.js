// # Exercício 2

// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.


let numero = prompt("Digite um número")

for(let i = 1; i <= 10; i++){
   console.log(`${i} x ${numero} = ${i*numero}`)
}