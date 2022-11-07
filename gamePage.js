var nomeJogador1 = localStorage.getItem("nomeJogador1");
var nomeJogador2 = localStorage.getItem("nomeJogador2");

var pontosDoJogador1 = 0;
var pontosDoJogador2 = 0;

document.getElementById("Nome1").innerHTML = nomeJogador1 + " : ";
document.getElementById("Nome2").innerHTML = nomeJogador2 + " : ";

document.getElementById("PontoJogador1").innerHTML = pontosDoJogador1;
document.getElementById("PontoJogador2").innerHTML = pontosDoJogador2;

function enviar() {
   var Numero1 = document.getElementById("num1").value;
   var Numero2 = document.getElementById("num2").value;
   var resposta = parseInt(Numero1) * parseInt(Numero2);

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