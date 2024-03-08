/*5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;*/


function inverterString(texto){
//parâmetro do texto que será invertido
    let textoFinal = ""

    for (let i = texto.length-1; i>=0; i--) {
        
        textoFinal+=texto[i]
    
    }
    console.log(textoFinal)
}


inverterString('coisa')

//é colocada no parâmetro o texto que será invertido. A saída será:asioc