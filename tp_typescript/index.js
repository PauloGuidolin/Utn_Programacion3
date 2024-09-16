"use strict";
//EJERCICIO 3
let string = `Hola,TypeScript!`;
let number = 123;
let boolean = true;
let date = new Date(2024, 9, 8);
document.write(`Texto: ${string} <br>
    Número: ${number} <br>
    Booleano: ${boolean} <br>
    Fecha: ${date}`);
document.write('<br>');
//ejercicio4
function convertir(a) {
    let convertido = String(a);
    document.write(`${convertido}`);
}
convertir(123);
//ejercicio5
let array = [1, 4, 5, 7, 2, 5];
function sumaArray(a) {
    let suma = 0;
    for (let i = 0; i < a.length; i++) {
        suma += a[i];
    }
    document.write(`<br> suma del array: ${suma}`);
}
sumaArray(array);
//ejercicio6
let Estudiante = {
    nombree: "Juan",
    edad: 20,
    curso: 'matematicas'
};
document.write(`
    <br>estudiante: ${Estudiante.nombree} 
    <br>Edad: ${Estudiante.edad}
    <br>Curso: ${Estudiante.curso}`);
const myAddress = {
    street: 'jose scordo',
    city: 'ciudad',
    postalCode: 123456
};
document.write(`
    <br> Dirección : Calle: ${myAddress.street}, Ciudad: ${myAddress.city}, CP: ${myAddress.postalCode}`);
const User = {
    nombre: 'paulo',
    correo: 'paulo@gmail.com',
    saludar: function () {
        return `hola, mi nombre es ${User.nombre}`;
    }
};
document.write(`<br> ${User.saludar()}`);
//ejercicio9
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(nombre, edad) {
        return (`hola, mi nombre es ${nombre} y tengo ${edad} años`);
    }
}
let persona = new Persona('juan', 20);
document.write(`<br> ${persona.saludar(persona.nombre, persona.edad)}`);
//ejercicio10
class caja {
    setValor(valor) {
        this.valor = valor;
    }
    getValor() {
        return this.valor;
    }
}
let cajaTexto = new caja();
cajaTexto.setValor('Mensaje secreto');
let cajaNumero = new caja();
cajaNumero.setValor(42);
document.write(`
    <br> contenido de caja de texto: ${cajaTexto.getValor()}
    <br> contenido de caja de numero: ${cajaNumero.getValor()}`);
//ejercicio11
function identidad(dato) {
    return dato;
}
document.write(`
    <br> identidad de numero: ${identidad(123)}
    <br> identidad del texto: ${identidad('texto')}`);
//ejercicio12
var color;
(function (color) {
    color[color["rojo"] = 0] = "rojo";
    color[color["verde"] = 1] = "verde";
    color[color["amarillo"] = 2] = "amarillo";
})(color || (color = {}));
let variable = color[2];
document.write(`
    <br> color favorito: ${variable}`);
