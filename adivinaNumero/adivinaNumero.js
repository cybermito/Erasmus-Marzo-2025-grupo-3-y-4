/* Generar número aleatorio */
/* Math.random genera un número aleatorio entre el 0 y el 1. (0.2, 0.765, 0.998, ..)
    Math.floor quita los decimales 
*/
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Guardar las referencias a cada párrafo.
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

// Guardar las referencias del input y del botón

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

// Variable para los intentos
let guessCount = 1;
// Variable para crear el botón reset
let resetButton;

//Función para comprobar el número introducido.
function checkGuess(){
    //Guardamos el número introducido y nos aseguramos de que se de tipo Number
    let userGuess = Number(guessField.value);

    //Comprobamos si estamos en el primer intento.
    if (guessCount === 1){
        guesses.textContent = "Intentos Anteriores ";
    }
    guesses.textContent += userGuess + " ";

    //Bloque para comprobar si hemos acertado o no el número aleatorio.

    if (userGuess === randomNumber){
        lastResult.textContent = "Felicidades has acertado!";
        lastResult.style.backgroundColor = "green";
        lowOrHigh.textContent = "";
        setGameOver();
    } else if (guessCount === 10){
        lastResult.textContent = "Ohh ¡GAME OVER!";
        setGameOver();
    } else {
        lastResult.textContent = "¡Incorrecto!";
        lastResult.style.backgroundColor = "red";
        //Comprobamos si el número es mayor o menor que el aleatorio, para dar ayuda al jugador.
        if (userGuess < randomNumber){
            lowOrHigh.textContent = "El número es muy bajo";
        } else if (userGuess > randomNumber){
            lowOrHigh.textContent = "El número es muy alto";
        }
    }
    //Preparamos las variables para el siguiente intento.
    guessCount++;
    //Vaciamos el valor del campo númerico
    guessField.value = "";
    //Aplicamos el foco nuevamente al input
    guessField.focus();
}

//Agregamos un listener al botón guessSubmit
guessSubmit.addEventListener('click', checkGuess);

//Creamos la función gameOver()

function setGameOver(){
    guessField.disabled = true; //Deshabilita el input
    guessSubmit.disabled = true; //Deshabilita el botón submit

    //Crear un nuevo botón para resetear el juego
    resetButton = document.createElement('button');
    resetButton.className = 'resetButton';
    resetButton.textContent = "Reiniciar Juego";
    //Colocamos el botón en el elemento body
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

//Función para resetear el programa
function resetGame(){
    guessCount = 1;

    //Tomamos todos los párrafos de ayuda
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i=0; i < resetParas.length; i++){
        resetParas[i].textContent = "";
        resetParas[i].style.backgroundColor = 'black';
    }

    //Eliminamos el botón reset
    resetButton.parentNode.removeChild(resetButton);

    //Reactivo el input y el botón de intentos
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = 'black';

    randomNumber = Math.floor(Math.random() * 100) + 1;

}