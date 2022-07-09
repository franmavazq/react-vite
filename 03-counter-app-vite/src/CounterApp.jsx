import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  const handleAdd = () => {
    console.log('+1')
    value = 2000
    console.log(value)
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2> {value} </h2>
      <button onClick={handleAdd}>
        <span>+1</span>
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 0
}
