var numeroSecreto, contador;
var botao;

function mostrarBotao(botao) {
  document.getElementById(botao).style.display = "block";
  document.getElementById(botao).style.display = "inline";
  document.getElementById(botao).style.visibility = "visible";
}

function esconderBotao(botao) {
  document.getElementById(botao).style.display = "none";
  document.getElementById(botao).style.visibility = "hidden";
}

function novoJogo() {
  mostrarBotao("chutar");
  esconderBotao("novoJogo");
  numeroSecreto = Math.floor(
    Math.random() * (Math.floor(10) - Math.ceil(0) + 1)
  );
  contador = 0;
  document.getElementById("resultado").innerHTML = "Tentativa nº: " + contador;
}

function chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  if (chute === numeroSecreto) {
    var mensagem = "Você acertou. Parabéns!";
    mostrarBotao("novoJogo");
    esconderBotao("chutar");
  } else if (chute < 0 || chute > 10) {
    var mensagem = "Número deve estar entre 0 e 10, tente novamente";
  } else {
    contador++;
    var mensagem = "Errou";
    if (chute > numeroSecreto) {
      mensagem +=
        "<br> <h6>Dica: O valor é menor, tente novamente!</h6><br> Tentativas restantes: " +
        (3 - contador);
    } else {
      mensagem +=
        "<br>Dica: O valor é maior, tente novamente!<br> Tentativas restantes: " +
        (3 - contador);
    }
  }
  document.getElementById("resultado").innerHTML = mensagem;
  if (contador == 3) {
    document.getElementById("resultado").innerHTML =
      "Suas tentativas esgotaram... Um novo jogo será iniciado!<br> O número secreto era: " +
      numeroSecreto;
    mostrarBotao("novoJogo");
    esconderBotao("chutar");
  }
}