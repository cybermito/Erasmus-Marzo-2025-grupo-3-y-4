/* Obtener un elemento/nodo del DOM */

const element = document.getElementsByTagName("h1");
console.log(element[0]);

const elementID = document.getElementById('noticia1');
console.log(elementID);

const elementClass = document.getElementsByClassName('titulo');
console.log(elementClass[0]);

/* querySelector */
/* Syntax: document.querySelector('selectorCSS'); */
/* Al usar selectores CSS en el query podemos crear consultas
más avanzadasa al igual que lo hacemos con los estilos CSS */

const h1 = document.querySelector('h1');
console.log(h1);

const h1Byclass = document.querySelector('.titulo');

h1.textContent = "Cambiado desde JS"

//Reseñas
// Obtener elementos

const inputReview = document.querySelector('#review');
const submitReview = document.querySelector('.reviewSubmit');
const reviews = document.querySelector('.reviews');

function reviewSubmit(){
    const userReview = inputReview.value;
    addReview(userReview);

}

function addReview(userReview){
    console.log("Ver review");
    const verReview = document.createElement('article');
    const tituloReview = document.createElement('h3');
    const textReview = document.createElement('p');
    verReview.classList.add('review');
    tituloReview.textContent = "Nombre: ";
    textReview.textContent = userReview;
    reviews.appendChild(verReview);
    verReview.appendChild(tituloReview);
    verReview.appendChild(textReview);
}

submitReview.addEventListener('click', reviewSubmit);

