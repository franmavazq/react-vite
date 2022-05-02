// Functional components

// import React, { Fragment } from 'react';
import React from 'react';

// Recibimos la props que recibimos de index y realizamos una desestructuracion de elementos enviados al componente, para evitar colocar props.saludo
// Ni se crea una constante adicional.
const PrimeraApp = ( { saludo='Hola mundo' } ) => {

  return (
    <>
      <h1> { saludo } </h1>
      {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
      <p>Este es un parrafo</p>
    </>
  );
}

export default PrimeraApp;