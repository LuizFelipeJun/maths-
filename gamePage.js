var nomeJogador1 = localStorage.getItem("nomeJogador1");
var nomeJogador2 = localStorage.getItem("nomeJogador2");

var pontosDoJogador1 = 0;
var pontosDoJogador2 = 0;

document.getElementById("Nome1").innerHTML = nomeJogador1 + " : ";
document.getElementById("Nome2").innerHTML = nomeJogador2 + " : ";

document.getElementById("PontoJogador1").innerHTML = pontosDoJogador1;
document.getElementById("PontoJogador2").innerHTML = pontosDoJogador2;

var resposta;

function enviar() {
   var Numero1 = document.getElementById("num1").value;
   var Numero2 = document.getElementById("num2").value;
   resposta = parseInt(Numero1) * parseInt(Numero2);

   var pergunta = "<h4 id='pergunta'>" + Numero1 + " x " + Numero2 + "</h4>";
   var entradaResposta = "<br> Resposta: <input type='number' id='inputCheckBox'>";
   var botao = "<br><br> <button onclick='checar()' class='btn btn-info'> Checar </button>";
   var linha = pergunta + entradaResposta + botao;

   document.getElementById("output").innerHTML = linha;

   document.getElementById("pergunta").style.fontWeight = 900;
   document.getElementById("pergunta").style.fontSize = "30px";

   document.getElementById("num1").value = "";
   document.getElementById("num2").value = "";
}

var turnoDaPergunta = "jogador1";
var turnoDaResposta = "jogador2";

function checar() {
   var pegarResposta = document.getElementById("inputCheckBox").value;
   if(pegarResposta == resposta) {
      if(turnoDaResposta == "jogador1") {
         pontosDoJogador1 = pontosDoJogador1 + 1;
         document.getElementById("pontoJogador1").innerHTML = pontosDoJogador1;
      } else {
         pontosDoJogador2 = pontosDoJogador2 + 1;
         document.getElementById("pontoJogador2").innerHTML = pontosDoJogador2;
      }

   }
   if(turnoDaPergunta == "jogador1") {
      turnoDaPergunta = "jogador2";
      document.getElementById("perguntaJogador").innerHTML = "Turno da pergunta: " + nomeJogador2;
   }
   else{
      turnoDaPergunta = "jogador1";
      document.getElementById("perguntaJogador").innerHTML = "Turna da pegunta: " + nomeJogador1;
   }
   if(turnoDaResposta == "jogador1") {
      turnoDaResposta = "jogador2";
      document.getElementById("respostaJogador").innerHTML = "Turno da resposta: " + nomeJogador2;
   }
   else{
      turnoDaResposta = "jogador1";
      document.getElementById("respostaJogador").innerHTML = "Turno da resposta: " + nomeJogador1;
   }
   document.getElementById("output").innerHTML = "";
}