import PropTypes from 'prop-types';
import './Missions.css';
import { useDispatch } from 'react-redux';
import { join } from '../../redux/Missions/missionsSlice';

const Missions = ({ id, name, description, index, reserved }) => {
  const dispatch = useDispatch();

  const handleJoin = (e, id) => {
    e.preventDefault();
    dispatch(join(id));
  }

  return(
    <div className={`flex flex-container ${ index % 2 === 0 ? "bg-gray" : "" }`}>
      <h3 className='flex-item'>{name}</h3>
      <p className='flex-item-bigger'>{description}</p>
      <div className='flex-item flex div-item'>
        <h3 className='member-item'>NOT A MEMBER</h3>
      </div>
      <div className='flex-item flex div-item'>
        <button className={`flex-item mission-button ${ reserved ? "leave-style" : "" }`} onClick={(e) => handleJoin(e, id)}>{ reserved ? "Leave mission" : "Join Mission" }</button>
      </div>
    </div>
  )
}

Missions.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default Missions;