import PropTypes from 'prop-types';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return count
}

export const CounterApp = ({ value }) => {
  return (
    <>
      <h1>Counter App</h1>
      <h2>{value}</h2>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 0
}
