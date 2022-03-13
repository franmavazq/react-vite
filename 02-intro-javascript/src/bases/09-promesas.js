import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise( ( resolve, reject ) => {
//   setTimeout( () => {
//     // Tarea
//     // importar
//     const p1 = getHeroeById(2);
//     resolve( p1 );
//     reject( 'No se pudo encontrar el heroe' );
//   }, 2000 );
// } );

// promesa.then( (heroe) => {
//   console.log('Then de la promesa', heroe);
// })
// .catch( err => console.warn( err ) );

const getHeroeByIdAsync = ( id ) => {

  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      // Tarea
      // importar
      const p1 = getHeroeById( id );
      if ( p1 ) {
        resolve( p1 );
      } else {
      reject( 'No se pudo encontrar el heroe' );
      }
    }, 2000 );
  } );
};

getHeroeByIdAsync(4)
  // .then( heroe => console.log('Heroe', heroe) )
  .then( console.log )
  // .catch( err => console.warn( err ) );
  .catch( console.warn);