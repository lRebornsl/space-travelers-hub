import { useSelector } from 'react-redux';

const ActiveMissionsList = () => {
  const missions = useSelector((state) => state.missions.missions);
  const activeMissions = missions.filter(mission => mission.reserved);

  return (
    <div>
      <h2 className='profile-titles'>My Missions</h2>
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
  )
}

export default ActiveMissionsList;
