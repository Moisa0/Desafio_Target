/*1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?*/



function encontrarSoma(indice, soma, k){
while( k < indice ) {

    k+=1

    soma+=k

}
console.log(soma)
}

encontrarSoma(13,0,0)
//dentro do parâmetro coloquei essa sequência, pois indica respectivamente os valores de INDICE, SOMA e K




//SOMA será igual a 91