// Functional components

// import React, { Fragment } from 'react';
import React from 'react';

const PrimeraApp = () => {
  const saludo = 'Hola mundo';

  return (
    <>
      <h1> {saludo} </h1>
      {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
      <p>Este es un parrafo</p>
    </>
  );
}

export default PrimeraApp;