var numero = 0

function aumentar(){

    numero ++

    mostrarnatela()
}
function zerar(){

    numero -= numero

    mostrarnatela()
}
function diminuir(){

    numero --

    mostrarnatela()
}

function mostrarnatela() {

const p = document.getElementById('resultado')

p.innerText = numero

}
