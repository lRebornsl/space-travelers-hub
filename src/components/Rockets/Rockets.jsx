import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/Rockets/rocketsSlice';
import Button from '../Button/Button';
import './Rockets.css';

const Rockets = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleReserveClick = () => {
    dispatch(reserveRocket(rocket.id))
  }
  useEffect(() => {
    console.log('Updated rocket.reserved:', rocket.reserved);
  }, [rocket.reserved]);

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
              <Button name="Cancel Reservation" onclick={() => "canceled"}/>
            ) : (
              <Button name="Reserve Rocket" onclick={handleReserveClick} />
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

