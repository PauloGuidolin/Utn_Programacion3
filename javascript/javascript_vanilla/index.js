//INTRODUCCION A JAVASCRIPT

//ejercicio 2
let a = 10;
let b = 5;
let c = a + b;
console.log(c);

//ejercicio 3
/*
let nombre=prompt("ingrese su nombre: ");
console.log(nombre);
*/



//OPERADORES LOGICOS Y CONDICIONALES

//ejercicio 1
let numero = 10;
let numero2 = 5;
let numero3 = 15;

if (numero > numero2 && numero > numero3) {
    console.log(numero);
} else if (numero2 > numero && numero2 > numero3) {
    console.log(numero2);
} else {
    console.log(numero3);
}

//ejercicio 2
/*
let parImpar=prompt("ingrese un numero y te dire si es par o impar: ");
if(parImpar%2==0){
    console.log(`el numer ${parImpar} es par`);
}else{
    console.log(`el numero ${parImpar} es impar`);2
}
*/

//OPERADORES DE ASIGNACION Y BUCLES

//ejercicio 1
let numero1 = 10;
while (numero1 > 0) {
    numero1--;
    console.log(numero1);
}

//ejercicio 2
/*
let numeroMayorACien = 0;
do {
    numeroMayorACien = prompt("ingrese un numero mayor a 100: ");
    // console.log(numero2);4
} while (numeroMayorACien < 100);
console.log(`ingresaste un numero mayor a 100: ${numeroMayorACien}`);
*/

//FUNCIONES DE JS

//ejercicio 1
function esPar(numero) {
    if (numero % 2 == 0) {
        console.log(`el numero ${numero} es par: ${true}`);
        // return true;
    } else {
        console.log(`el numero ${numero} es impar: ${false}`);
        // return false;
    }
}

esPar(8);

//ejercicio 2

function convertirCelsiusAFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;
    console.log(`${celsius} grados celsius son ${fahrenheit} grados fahrenheit`);
}
convertirCelsiusAFahrenheit(20);

//OBJETOS EN JAVASCRIPT

//ejercicio 1
let persona = {
    nombre: "Paulo",
    edad: 21,
    ciudad: "Mendoza"
};

console.log(persona);
function cambiarCiudad(persona, ciudadNueva) {
    persona.ciudad = ciudadNueva;
}
cambiarCiudad(persona, "Madrid");
console.log(persona);

//ejercicio 2


let libro = {
    titulo: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    anioPublicacion: 2010
};

function esMayora10(cuento) {
    if ((2024 - cuento.anioPublicacion) >= 10) {
        return true;
    } else {
        return false;
    }
}

if (esMayora10(libro)) {
    console.log(`el libro ${libro.titulo} es mayor a 10 años ${esMayora10(libro)}`);
} else {
    console.log(`el libro ${libro.titulo} es mayor a 10 años ${esMayora10(libro)}`);
}



//ARRAYS
//ejercicio 1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);
let multiploDos = []

for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i] * 2
    multiploDos[i] = num
}

console.log(multiploDos);

//ejercicio 2
let numerosPares = [];

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        numerosPares[i] = i;
    }
}
console.log(numerosPares);

//INTRODUCCION AL DOM
//ejercicio 1
let boton = document.getElementById("boton");
let contenedor = document.getElementById("parrafos");

boton.addEventListener("click", function () {
    contenedor.style.color = "blue";
});

//ejercicio 2
let texto = document.getElementById("texto");
let enviar = document.getElementById("enviar");

enviar.addEventListener('click', function () {
    alert(texto.value);
})

//EVENTOS EN DOM
//ejercicio 1
let element1 = document.getElementById("li1");
let element2 = document.getElementById("li2");
let element3 = document.getElementById("li3");
let element4 = document.getElementById("li4");

function mostrarTexto(elemento) {
    elemento.addEventListener("click", function () {
        console.log(elemento.textContent);
    })
}
mostrarTexto(element1);
mostrarTexto(element2);
mostrarTexto(element3);
mostrarTexto(element4);

//ejercicio 2

let text = document.getElementById("text1");
let habilitar = document.getElementById("hab");
let deshabilitar = document.getElementById("des");

//funcion para deshabilitar
deshabilitar.addEventListener("click", function () {
    text.disabled = true;
})

//funcion para habilitar
habilitar.addEventListener('click', function () {
    text.disabled = false;
})

//LocalStorage
let formulario = document.getElementById("formulario");
let guardar = document.getElementById("submit-correo");
let correo = document.getElementById("email-guardado");
let eliminar=document.getElementById("eliminar");

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    let mail = document.getElementById("mail");

    localStorage.setItem("userEmail", mail.value);
    correo.textContent = `Correo Guardado: ${mail.value}`;
})

document.addEventListener("DOMContentLoaded", function() {
    let email = localStorage.getItem("userEmail");
    if (email) {
        correo.textContent = "Correo guardado: " + email;
    }
});

//function eliminarCorreo

eliminar.addEventListener("click", function () {
    localStorage.removeItem("userEmail"); //remueve el correo guardado
    correo.textContent = ""; 
});


