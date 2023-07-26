import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../../redux/Rockets/rocketsSlice';
import Button from '../Button/Button';
import './Rockets.css';

const Rockets = ({ rocket }) => {
  const dispatch = useDispatch();
  
  const handleReserveClick = () => {
    if (rocket.reserved) {
      dispatch(cancelReservation(rocket.id))
    } else {
      dispatch(reserveRocket(rocket.id))
    }
  }

  return (
    <div className="rockets-container">
      <div className="rocket-card-container">
        <div>
          <img src={rocket.image} alt="rocket image" className="rocket-img" />
        </div>
        <div className="rocket-info-container">
          <div>
            <p className="rocket-name">{rocket.name}</p>
          </div>
          <div>
            <p className="rocket-description">{rocket.description}</p>
          </div>
          <div className="reserve-btn-container">
            {rocket.reserved ? (
              <Button
                name="Cancel Reservation"
                onclick={handleReserveClick}
                stylename="cancel-reserve-btn"
              />
            ) : (
              <Button
                name="Reserve Rocket"
                onclick={handleReserveClick}
                stylename="reserve-btn"
              />
            ) }
          </div>
        </div>
      </div>
    </div>
  )
}

Rockets.propTypes = {
  rocket: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
  
}

export default Rockets;

