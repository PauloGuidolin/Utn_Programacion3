//ejercicio 1
class Coche {
    marca: string
    modelo: string
    velocidad: number

    constructor(marca: string, modelo: string, velocidad: number) {
        this.marca = marca
        this.modelo = modelo
        this.velocidad = velocidad
    }
    acelerar() {
        this.velocidad += 100
        console.log(this.velocidad)
    }
    frenar() {
        this.velocidad -= 100
        console.log(this.velocidad)
    }
    mostrar() {
        console.log(this.marca, this.modelo, this.velocidad)
    }

}

const coche = new Coche('fiat', 'uno', 200)
coche.acelerar()
coche.frenar()
coche.mostrar()

//ejercio 2

interface Todo {
    userid: number;
    id: number;
    title: string;
    completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos';


const withFetch = () => {
    fetch(url)
        .then(res => res.json())
        .then((data: Todo[]) => {
            // console.log(data)
            const datos = data.filter(todo => todo.completed)
            console.log(datos)
        })
        .catch(error => console.error(error));
};

withFetch();

//ejercicio 3

let circle = document.getElementById('circle');

class circulo{
    areaMovimientoElement: HTMLElement;
    cuboElement: HTMLElement;
    velocidad: number;

    constructor(areaMovimientoElement: HTMLElement, cuboElement: HTMLElement, velocidad: number){
        this.areaMovimientoElement = areaMovimientoElement;
        this.cuboElement = cuboElement;
        this.velocidad = velocidad;
    }
}