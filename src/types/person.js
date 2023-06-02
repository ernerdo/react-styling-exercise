import PropTypes from "prop-types";

const personPropTypes = {
  name: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  current_title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  phone_number: PropTypes.string,
  personal_email: PropTypes.string,
  linkedIn: PropTypes.string,
  experience: PropTypes.arrayOf(PropTypes.string).isRequired,
  education: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default personPropTypes;
