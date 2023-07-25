import './Missions.css';

const Missions = ({ name, description, index }) => {
  return(
    <div className={`flex flex-container ${ index % 2 === 0 ? "bg-gray" : "" }`}>
      <h3 className='flex-item'>{name}</h3>
      <p className='flex-item-bigger'>{description}</p>
      <div className='flex-item flex div-item'>
        <h3 className='member-item'>NOT A MEMBER</h3>
      </div>
      <div className='flex-item flex div-item'>
        <button className='flex-item mission-button'>Join Mission</button>
      </div>
    </div>
  )
}

export default Missions;