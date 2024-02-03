let textoCopiado = false

var entradaDeTexto = document.querySelector("#entrada-de-texto");

var saidaDeTexto = document.querySelector("#saida-de-texto");

function codificar() {
    let entrada = entradaDeTexto.value;
    
    let resultado = entrada.replace(/e/, "enter").replace(/i/, "imes").replace(/a/g, "ai").replace(/o/, "ober").replace(/u/, "ufat");

    document.getElementById("saida-de-texto").innerHTML = resultado;

    textoCopiado = false;

    exibirTextoCopiado()
}

function decodificar() {
    let entrada = entradaDeTexto.value;

    let resultado = entrada.replace(/enter/, "e").replace(/imes/, "i").replace(/ai/, "a").replace(/ober/, "o").replace(/ufat/, "u");

    document.getElementById("saida-de-texto").innerHTML = resultado;

    textoCopiado = false;

    exibirTextoCopiado();
}

function copiar() {
    let copiarTexto = document.getElementById("saida-de-texto");

    copiarTexto.select();

    document.execCommand("copy");

    textoCopiado = true;

    exibirTextoCopiado();

    document.getElementById("entrada-de-texto").value = ""; //apaga a entrada

}
//função que define qual mensagem o botão de copiar irá exibir
function exibirTextoCopiado() {
    if(textoCopiado == true) {
        document.getElementById("botao-copiar").innerText = "Copiado!";
    } else {
        document.getElementById("botao-copiar").innerText = "Copiar!";
    }
}