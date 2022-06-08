import PropTypes from "prop-types";

const Heading = ({ text = "empty text...", ...rest }) => {
  return <h1 {...rest}>{text}</h1>;
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
