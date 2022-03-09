// Variables y Constantes

const nombre = 'Francisco';
const apellido = 'Mancuello';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// Scope
// No se debe usar var
if(true){
  const nombre = 'Peter'
  let valorDado = 6;
  console.log(nombre, valorDado);
}

console.log(nombre, valorDado);