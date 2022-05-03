// Utilize el sninep rafcp para crear el componente con propTypes
import React from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
  return (
    <>  
      <h1>CounterApp</h1>
      <h2> { value } </h2>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

export default CounterApp
