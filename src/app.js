
var entradaDeTexto = document.querySelector("#entrada-de-texto");

var saidaDeTexto = document.querySelector("#saida-de-texto");
//variável para manipular a mensagem que será exibida no botão copiar
var textoCopiado = false;
//função que define qual mensagem o botão de copiar irá exibir
function exibirTextoCopiado() {
    if (textoCopiado == true) {
        document.getElementById("botao-copiar").innerText = "Copiado!";
    } else {
        document.getElementById("botao-copiar").innerText = "Copiar!";
    }
}
//declaração de funcões para desabilitar botões da área de saída de texto
function desabilitarBotaoReverter() {
    document.getElementById("botao-reverter").disabled = true;
}

function desabilitarBotaoCopiar() {
    document.getElementById("botao-copiar").disabled = true;
}
//chamado das funções para desabilitar botões da área de saída de texto
desabilitarBotaoCopiar();

desabilitarBotaoReverter();
//declaração das funções para habilitar botões da área de saída de texto
function habilitarBotaoReverter() {
    document.getElementById("botao-reverter").disabled = false;
}

function habilitarBotaoCopiar() {
    document.getElementById("botao-copiar").disabled = false;
}
//declaração de função para apagar a entrada de texto
function apagarEntrada() {
    document.getElementById("entrada-de-texto").value = "";
}


//declaração das funções de codificar e decodificar
function codificar() {
    //verificação afim de evitar tentativas com a entrada de texto vazia
    if (entradaDeTexto.value == "") {
        document.getElementById("saida-de-texto").innerHTML = "Insira um texto ou palavra!"
    } else {
        let entrada = entradaDeTexto.value;

        let resultado = entrada.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

        document.getElementById("saida-de-texto").innerHTML = resultado;

        textoCopiado = false;

        exibirTextoCopiado();

        apagarEntrada();

        habilitarBotaoCopiar();

        habilitarBotaoReverter();
    }
}

function decodificar() {
    //verificação afim de evitar tentativas com a entrada de texto vazia
    if (entradaDeTexto.value == "") {
        document.getElementById("saida-de-texto").innerHTML = "Insira um texto ou palavra!";
    } else {
        let entrada = entradaDeTexto.value;

        let resultado = entrada.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

        document.getElementById("saida-de-texto").innerHTML = resultado;

        textoCopiado = false;

        exibirTextoCopiado();

        apagarEntrada();

        habilitarBotaoCopiar();

        desabilitarBotaoReverter();
    }
}
//função para reverter codificação
function reverter() {
    let entrada = saidaDeTexto.value;

    let resultado = entrada.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("saida-de-texto").innerHTML = resultado;

    textoCopiado = false;

    exibirTextoCopiado();

    desabilitarBotaoReverter();
}
//função para copiar o resultado da codificação/decodificação
function copiar() {
    let copiarTexto = document.getElementById("saida-de-texto");

    copiarTexto.select();

    document.execCommand("copy");

    textoCopiado = true;

    exibirTextoCopiado();

    desabilitarBotaoCopiar();
}