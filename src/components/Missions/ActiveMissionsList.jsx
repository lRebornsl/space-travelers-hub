import { useSelector } from 'react-redux';

const ActiveMissionsList = () => {
  const missions = useSelector((state) => state.missions.missions);
  const activeMissions = missions.filter(mission => mission.reserved);

  return (
    <div>
      <h2>My Rockets</h2>
      {reservedRockets.length === 0 ? (
        <p>No rockets reserved yet.</p>
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
