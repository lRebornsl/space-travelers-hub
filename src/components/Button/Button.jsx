import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ name, onclick, stylename }) => {
  return (
    <>
      <button type="button" className={stylename} onClick={onclick}>{name}</button>
    </>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
  stylename: PropTypes.string.isRequired,
}

export default Button;

