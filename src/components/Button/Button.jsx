import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ name }) => {
  return (
    <>
      <button type="button" className="reserve-btn">{name}</button>
    </>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Button;

