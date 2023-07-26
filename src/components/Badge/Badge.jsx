import PropTypes from 'prop-types';
import './Badge.css';

const Badge = ({ name }) => {
  return (
    <>
      <span className="badge">{name}</span>
    </>
  )
}

Badge.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Badge
