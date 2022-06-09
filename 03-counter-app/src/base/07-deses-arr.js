// Desestructuracion de arreglos
// Asignacion de arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log( personajes[0] );
// console.log( personajes[1] );
// console.log( personajes[2] );

const [ , , p3] = personajes; // Retorna Trunks
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. El primer valor del arreglo se llamara nombre
// 2. Se llamara setNombre
const usState = (valor) => {
    return [valor, () => {
        console.log('Hola Mundo');
    }];
}
const [nombre, setNombre] = usState('Francisco');

console.log(nombre);
setNombre();