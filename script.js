let arrayNumeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ]
let arrayPintas = ["♦", "♥", "♠", "♣"]
// Div donde van las cartas Generadas
let divCartasTop = document.querySelector('.cartasRandomDiv')
// Definiendo Variables
let carta = document.querySelector('.carta')
let pintaTop = document.querySelector('.pintaTop')
let pintaBot = document.querySelector('.pintaBot')
let numnero = document.querySelector('.numero')


function crearCarta() {
    // Creando Parametros Random
    let pintaRandom = arrayPintas[Math.floor(Math.random() * 4)]
    let numeroRandom = arrayNumeros[Math.floor(Math.random() * 13)]
    // Creando elementos HTML
    let cartaAleatoria = document.createElement('div')
    let pintaTopRandom = document.createElement('p')
    let numeroCenter = document.createElement('p')
    let pintaBotRandom = document.createElement('p')
    // Agregando Clases
    cartaAleatoria.classList.add('carta')
    pintaTopRandom.classList.add('pintaTop')
    numeroCenter.classList.add('numero')
    pintaBotRandom.classList.add('pintaBot')
    // Agregando Pinta
    pintaTopRandom.textContent = pintaRandom
    pintaBotRandom.textContent = pintaRandom
    // Agregando Numero Random
    numeroCenter.textContent = numeroRandom
    // Agregando Estilos 
    if(pintaRandom == arrayPintas[0] || pintaRandom == arrayPintas[1]) {
        pintaTopRandom.style.color = 'red'
        pintaBotRandom.style.color = 'red'
        numeroCenter.style.color = 'red'
    } else {
        pintaTopRandom.style.color = 'black'
        pintaBotRandom.style.color = 'black'
        numeroCenter.style.color = 'black'
    }
    // Agregando Child
    divCartasTop.appendChild(cartaAleatoria)
    cartaAleatoria.appendChild(pintaTopRandom)
    cartaAleatoria.appendChild(numeroCenter)
    cartaAleatoria.appendChild(pintaBotRandom)

}

function tenCards(numeroInput) {
    for(let i = 0; i <= 10 ; i++)
    crearCarta()
}

