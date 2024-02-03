let textoCopiado = false

var entradaDeTexto = document.querySelector("#entrada-de-texto");

var saidaDeTexto = document.querySelector("#saida-de-texto");

function codificar() {
    let entrada = entradaDeTexto.value;
    
    let resultado = entrada.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById("saida-de-texto").innerHTML = resultado;

    textoCopiado = false;

    exibirTextoCopiado()

    apagarEntrada()
}

function decodificar() {
    let entrada = entradaDeTexto.value;

    let resultado = entrada.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("saida-de-texto").innerHTML = resultado;

    textoCopiado = false;

    exibirTextoCopiado();

    apagarEntrada()
}

function reverterdecodificar() {
    let entrada = saidaDeTexto.value;

    let resultado = entrada.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

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
}

function apagarEntrada() {
    document.getElementById("entrada-de-texto").value = "";
}
//função que define qual mensagem o botão de copiar irá exibir
function exibirTextoCopiado() {
    if(textoCopiado == true) {
        document.getElementById("botao-copiar").innerText = "Copiado!";
    } else {
        document.getElementById("botao-copiar").innerText = "Copiar!";
    }
}