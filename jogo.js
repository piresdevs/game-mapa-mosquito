// LIMITAR O ESPAÇO DA TELA PARA OS ELEMENTOS \\

var altura = 0
var largura = 0
var vidas = 1
var tempo = 60

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel + nivel.replace('?', '')

if(nivel === 'normal') {
    var criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
    var criaMosquitoTempo = 1000
} else if(nivel === 'chucknorris') {
    var criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight // height = altura
    largura = window.innerWidth // width = largura

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

    tempo  -= 1
    
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000) 

// POSICIONAMENTO RANDÔMICO \\

function posicaoRandomica() {

    // Remover o mosquito anterior (caso exista)

    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }
    
    // Através do uso de ID's deixar a interação com os corações dinâmica

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

// CRIAR O ELEMENTO HTML \\

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)

}

// TAMANHOS RANDÔMICOS \\

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }    
}

// CRIAÇÃO DOS LADOS \\

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }
}






