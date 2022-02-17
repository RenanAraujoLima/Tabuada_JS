//FUNÇÃO PARA GERAR TABUADA

var entrada = window.prompt("Digite um numero:");

let i = 0;
function tabuada(mensagem, numero) {
  console.log(mensagem, numero);
  while (i < 10) {
    //LIMITE DO INDICE = TAMANHO DA TABUADA
    i++;
    console.log(numero, "X", i, "=", i * numero);
  }
}

tabuada("TABUADA DO", entrada);
//INSERIR MENSAGEM, INSERIR NUMERO PARA TABUADA
