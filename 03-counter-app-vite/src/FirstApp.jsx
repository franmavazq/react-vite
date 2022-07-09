import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle }) => {
  // console.log(props)
  if (!title) {
    throw new Error('Title is required')
  }
  return (
    <>
      <h1>{title}</h1>
      {/*<code>{JSON.stringify(}</code >*/}
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number
};
