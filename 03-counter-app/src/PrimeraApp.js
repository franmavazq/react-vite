import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo }) => {

  return (
    <>
      <h1> { saludo } </h1>
      {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
      <p>Este es un parrafo</p>
    </>
  );
}
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

export default PrimeraApp;