// Desestructuracion de objetos
// Asignacion Desestructurante
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
};

// const { nombre, edad, clave } = persona;

// console.log(edad);
// console.log(clave);
// console.log(nombre);

const useContext = ( { clave, nombre, edad, rango = 'Capitan'} ) => {
  // console.log( usuario );
  return{
    nombreClave: clave,
    anios: edad,
    latlng:{
      lat: 12.1212,
      lng: -14.1212,
    }
  }
}
const { nombreClave, anios, latlng:{ lat, lng } } = useContext( persona );

console.log( nombreClave, anios );
console.log( lat, lng );