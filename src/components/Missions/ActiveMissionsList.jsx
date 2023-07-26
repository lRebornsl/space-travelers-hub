import { useSelector } from 'react-redux';

const ActiveMissionsList = () => {
  const missions = useSelector((state) => state.missions.missions);
  const activeMissions = missions.filter(mission => mission.reserved);

  return (
    <div>
      <h2>My Missions</h2>
      <div className='profiles-container'>
        {activeMissions.length === 0 ? (
          <p>No active missions yet.</p>
        ) : (
          <ul>
            {activeMissions.map(mission => (
              <li key={mission.mission_id}>
                {mission.mission_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ActiveMissionsList;
