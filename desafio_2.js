/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/


function encontrarNumero(chute){
//dentro do parâmetro se coloca o valor que você deseja saber se está na lista
    let sequencia = [0,1];
    while(sequencia[sequencia.length-1]<chute){
        sequencia.push(sequencia[sequencia.length-1]+sequencia[sequencia.length-2])
        }

    if(sequencia.indexOf(chute)!=-1){
        console.log(`O numero informado pertence à sequencia de Fibonacci, e está na posição ${sequencia.indexOf(chute)+1} da lista`)
    } else{
        console.log(`O numero informado não pertence à sequencia de Fibonacci`)
    }
}

encontrarNumero(5)
//No parâmetro indiquei o valor que desejo saber se está incluso, e sim, está :)
