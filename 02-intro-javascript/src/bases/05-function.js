// Funciones en JS
const saludar = function ( nombre ){
  return `Hola, ${ nombre }`;
}
const saludar2 = ( nombre )=>{
  return `Hola, ${ nombre }`;
}
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola mundo`;

console.log( saludar );
console.log( saludar2('Francisco') );
console.log( saludar3('Mancuello') );
console.log( saludar4() );


const getUser = () =>( {
   uid: 'ABC1234',
  username: 'Elvago432',
 })

const user = getUser();
console.log( user );


// TAREA
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
function getUsuarioActivo( nombre ){
  return{
    uid: 'AVE87',
    username: nombre,
  }
};

const usuarioActivo = getUsuarioActivo( 'Francisco' );
console.log( usuarioActivo )

// Respuesta
const getUsuarioActivo2 = ( nombre )=>({
    uid: 'AVE87',
    username: nombre,
});
const usuarioActivo2 = getUsuarioActivo2( 'Francisco2' );
console.log(usuarioActivo2);