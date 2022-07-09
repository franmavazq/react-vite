import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
  // console.log(props)
  if (!title) {
    throw new Error('Title is required')
  }
  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify()}</code > */}
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired
};

FirstApp.defaultProps = {
  name: 'John',
  subTitle: 'Default subTitle',
  title: 'Default title'
}

