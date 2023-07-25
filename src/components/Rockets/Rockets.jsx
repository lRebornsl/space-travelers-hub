import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Rockets.css';

const Rockets = ({ name, description, img, id }) => {
  return (
    <div className="rockets-container">
      <div className="rocket-card-container">
        <div>
          <img src={img} alt="rocket image" className="rocket-img" />
        </div>
        <div className="rocket-info-container">
          <div>
            <p className="rocket-name">{name}</p>
          </div>
          <div>
            <p className="rocket-description">{description}</p>
          </div>
          <div className="reserve-btn-container">
            <Button
              name="Reserve Rocket"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Rockets.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Rockets;

