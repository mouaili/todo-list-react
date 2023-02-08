import { PropTypes } from 'prop-types';

const PageTitle = ({ counter, title }) => {
  return (
    <h2>
      {counter}
      {title}
    </h2>
  );
};

export default PageTitle;

PageTitle.propTypes = {
  counter: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
