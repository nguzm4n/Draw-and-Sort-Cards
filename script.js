// Valores de la Carta
let arrayNumeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ];
let arrayPintas = ["♦", "♥", "♠", "♣"];
// Div donde van las cartas Generadas
let divCartasTop = document.querySelector('.cartasRandomDiv');
// Definiendo Variables de la Carta
let carta = document.querySelector('.carta');
let pintaTop = document.querySelector('.pintaTop');
let pintaBot = document.querySelector('.pintaBot');
let numnero = document.querySelector('.numero');
let arrayDeCartas = [];

function crearCarta() {
    // Creando Parametros Random
    let pintaRandom = arrayPintas[Math.floor(Math.random() * 4)];
    let numeroRandom = arrayNumeros[Math.floor(Math.random() * 13)];
    // Creando elementos HTML
    let cartaAleatoria = document.createElement('div');
    let pintaTopRandom = document.createElement('p');
    let numeroCenter = document.createElement('p');
    let pintaBotRandom = document.createElement('p');
    // Agregando Clases
    cartaAleatoria.classList.add('carta');
    pintaTopRandom.classList.add('pintaTop');
    numeroCenter.classList.add('numero');
    pintaBotRandom.classList.add('pintaBot');
    // Agregando Pinta
    pintaTopRandom.textContent = pintaRandom;
    pintaBotRandom.textContent = pintaRandom;
    // Agregando Numero Random
    numeroCenter.textContent = numeroRandom;
    // Agregando Estilos 
    if(pintaRandom == arrayPintas[0] || pintaRandom == arrayPintas[1]) {
        pintaTopRandom.style.color = 'red';
        pintaBotRandom.style.color = 'red';
        numeroCenter.style.color = 'red';
    } else {
        pintaTopRandom.style.color = 'black';
        pintaBotRandom.style.color = 'black';
        numeroCenter.style.color = 'black';
    }
    // Agregando Child
    
    cartaAleatoria.appendChild(pintaTopRandom);
    cartaAleatoria.appendChild(numeroCenter);
    cartaAleatoria.appendChild(pintaBotRandom);
    divCartasTop.appendChild(cartaAleatoria);

    // Agregando Cartas al Array 
    arrayDeCartas.push({numero:numeroRandom, pinta:pintaRandom});

}
// Obteniendo Valor del Input

inputDraw = document.querySelector('.draw');
inputDraw.addEventListener('click', tenCards);

function tenCards() {
    divCartasTop.innerHTML = "";
    inputCarta = document.querySelector('#inputCarta').value;
    arrayDeCartas = [];
    for(let i = 1; i <= inputCarta ; i++){
    crearCarta()};
    console.log(arrayDeCartas);
    
}

// Obteniend el boton Sort

inputSort = document.querySelector('.sort');
inputSort.addEventListener('click', ordenar(arrayDeCartas));

// Obteniendo Div donde van las cartas ordenadas
let cartasOrdenadas = document.querySelector('.cartasOrdenadas')

// Función para ordenar Cartas

const ordenar = (arr) => {
    let min = 0;
    while (min < arr.length-1){
        for(let i = min+1; i < arr.length; i++) {
          if (arr[min].numero > arr[i].numero) {
            let aux = arr[min];
            arr[min] = arr[i];
            arr[i] = aux;
          }
        }   
        min++;
        console.log("Ciclo while terminado")

    }
	return arr;
}; 

