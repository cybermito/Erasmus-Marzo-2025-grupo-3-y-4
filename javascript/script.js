// Comentario de una sola línea
/* Comentarío
de varias líneas */

/* sintaxis crear variable 

var nombreVariable; //No usar
let nombreVariable;
const PI = 3.1416; Constantes

Nombrar variable (nombre descriptivo)
Puede contener letras, números y guión bajo
let nombre01_20;
No puede empezar con número
let 01nombre;
No puede ser nombrada con palabras del propio lenguaje
let console;
let for;

let nombreAlumno; (camel case);

*/

/* var nombre = 'Antonio';
let apellido = 'Mesa';

console.log(nombre);
console.log(apellido);

var nombre = 'Luna';
console.log(nombre);
let apellidos = 'Mesa'; */


// Tipos de datos en Javascript
/*
    number --> numérico
    let numero = 2;
    let numero2 = 3.1489;

    string --> cadena de carácteres
    let cadena = 'cadena de carácteres';
    let cadena2 = "cadena de carácteres";
    let cadena3 = `cadena de carácteres`;

    boolean --> true or false
    let boolean = true;
    null --> sin valor o contenido
    undefined --> sin definir
    let sinDefinir;
    Object --> Objeto

    let alumno = {
        'name':'Luna',
        'apellido':'Mesa',
        'hobby':'Jugar'
    }

*/

let numero = 10;
console.log("La variable numero" + " es " + typeof numero);
console.log("El contenido es: " + numero);

let boolean = true;
console.log(typeof boolean);

let cadena

let alumno = {
    'name':'Luna',
    'apellido':'Mesa',
    'hobby':'Jugar'
};

console.log(typeof alumno);

/* Operadores */

/**
 * Asignación 
 * = asigna un valor a una variable
 * += suma y asigna
 * -= resta y asigna
 * *= multiplica y asigna
 * /= divide y asigna
 * %= resto de división y asigna
 * Aritmeticos
 *  suma +
 *  resta -
 *  multiplicación *
 *  división /
 *  módulo % resto de la división
 */

let numero1 = 10;
let numero2 = 5;

console.log(numero1 + numero2);
console.log(numero1 % numero2);
console.log(numero1 / numero2);

/* Operadores de lógicos o de comparación 

igual ==
igual estricto ===
distinto !=
distinto estricto !==
Mayor que >
Mayor igual que >=
Menor que <
Menor igual que <=

*/

console.log(numero1 == numero2);
numero1 = 10;
cadena = '10';
console.log(numero1 == cadena); //true
console.log(numero1 === cadena); //false

/* Concatenación 

    Unir dos string 
    syntax 

    "Hola " + "Mundo" 

    "Hola Mundo"
*/

/* operador Ternario 

Se necesitan tres operadores
Es un operador condicional
syntax

condicion ? valor1 : valor2;

Si la condición es true devuelve valor1 si no, devuelve valor2

*/

console.log(numero1 === numero2 ? "Son iguales" : "son diferentes");

/* Condicionales */

/*
    if...else

    syntax:

    if (condicion){
        bloque de código si verdadero
    } else {
        bloque de código si falso 
    }

    Valores falsos:
     - false
     - undefined
     - null
     - 0
     - NaN
     - '' empty string
*/

/* 

    switch ... case

    syntax: 

    switch (expresión){
    case valor1:
        bloque de código si valor1
        break;

    case valor2:
        bloque de código si valor2
        break;

    case valor3:
        bloque de código si valor3
        break;

    default:
        bloque de código por defecto
        si no es nigún valor anterior

    }

if (condicion1){
    code
} else if (condicion2) {
    code2
} else if (condicion3) {
    code3
} else {
    default code
}

*/

nombre = 'Pepito';

switch (nombre){

    case 'Luna':
        console.log("Hola soy Luna");
        break;

    case 'Antonio':
        console.log("Hola soy Antonio");
        break;
    
    default:
        console.log("Hola no se quien soy");
}

/* Loops */

/*
    for

    syntax

    for(let i=0; i<10; i++){
        Repite 10 veces este código
    }

    while
    syntax

    while(condición){
        bloque de código
    }
    
    do .... while
    syntax

    do {
        bloque de código
    }while(condición);

*/

/* Funciones */

/*
    Syntax:

    function nombreFuncion (parámetros opcionales){
        bloque código
        return opcional si devuelve valor
    }
*/

function operacionAritmetica (operador, valor1, valor2){

    if(operador === '*'){
        return valor1 * valor2;
    } else if(operador === '+'){
        return valor1 + valor2;
    } else if (operador === '-'){
        return valor1 - valor2;
    } else if (operador === '/'){
        return valor1 / valor2;
    }
}

let resultado = 0;
resultado = operacionAritmetica('*', numero1, numero2);
console.log("El resultado es: " + resultado);

resultado = operacionAritmetica('/', numero1, numero2);
console.log("El resultado es: " + resultado);

resultado = operacionAritmetica('+', numero1, numero2);
console.log("El resultado es: " + resultado);

resultado = operacionAritmetica('-', numero1, numero2);
console.log("El resultado es: " + resultado);

/* Arrays / Listas */

/*
    let frutas = ['manzana', 'platano', 'naranja'];
*/

let frutas = ['manzana', 'platano', 'naranja'];

console.log(typeof frutas);

/*
    object tiene 

    propiedades igual atributos
    métodos igual a acciones que puede realizar (funciones)

*/

console.log(frutas[0]);

/* Iterar por los elementos de una lista */
frutas.forEach(element => {
    console.log(element);    
});

/* añadir un elemento a la lista */

frutas.push('Kiwi');
console.log(frutas);

/* quitar un elemento de la lista (del final) */

frutas.pop();
console.log(frutas);

/* añadir al principio */
frutas.unshift('kiwi', 'melón');
console.log(frutas);

/* tamaño del array */
console.log(frutas.length);

/* 
En la página mdn developers encontramos más métodos para los arrays
*/

/* Programación Orientada a Objetos */

/* Crear un dato object */

let persona = new Object();
let coche = {};

persona = {
    'nombre': 'Luna',
    'edad': 4,
    'profesion': 'Ser Feliz',
    'reir': function(){
        console.log("Me estoy riendo 😂");
    }
}

console.log(persona);

/* Acceder a un dato del objeto */

console.log(persona.nombre);
console.log(persona['edad']);

/* Añadir propiedades */

persona.pais = 'España';
console.log(persona);

persona.reir();

/* Clases 
    Una mejora sobre la herencia en los objetos.

    Las clases son como fabrica de objetos

    fabrica de vehiculos --> coche, moto, bicicleta, camión...

    syntax

    class NombreClase {
        constructor(parametros){
            this.parametro1 = parametro1;
            this.parametro2 = parametro2
            ....
        }
    }
*/

/* Ejemplo básico */

class Robot {
    constructor(nombre, color){
        this.nombre = nombre; //Propiedad del robot
        this.color = color;
    }

    // Método para que pueda hablar
    hablar() {
        console.log(`¡Hola! Soy ${this.nombre} y mi color es ${this.color}, tu robot amigo. 🤖`);
    }

    mover(){
        console.log(`${this.nombre} está moviendose... 🚀`);
    }
}

let robot1 = new Robot('Atibot', 'rojo');
robot1.hablar();
robot1.mover();

let robot2 = new Robot('Skayner', 'plata');
robot2.hablar();
robot2.mover();

/* Herencia en POO */

class RobotBailarin extends Robot {
    bailar(){
        console.log(`${this.nombre} está bailando 💃🏿🕺🏽🤖`);
    }
}

let robotBailarin = new RobotBailarin('DancerBot', 'Green');

robotBailarin.hablar();
robotBailarin.bailar();
//robot1.bailar(); //Da error al no existir en la clase Robot.

/*  Funciones callback 

    Son funciones que se pasan como parámetros de otras funciones y se ejecutan dentro de ellas.
*/

function saludar(nombre){
    console.log(`Hola, ${nombre}`);
}

function ingresarNombre(callback){
    let nombre = prompt("Escribe tu nombre: ");

    callback(nombre);
}

ingresarNombre(saludar);
