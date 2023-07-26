import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ name, onclick }) => {
  return (
    <>
      <button type="button" className="reserve-btn" onClick={onclick}>{name}</button>
    </>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
}

export default Button;

