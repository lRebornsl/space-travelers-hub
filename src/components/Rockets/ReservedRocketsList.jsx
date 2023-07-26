import { useSelector } from 'react-redux';

const ReservedRocketsList = () => {
  const rockets = useSelector((state) => state.rocketsSlice.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      <h2>My Rockets</h2>
      {reservedRockets.length === 0 ? (
        <p>No rockets reserved yet.</p>
      ) : (
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>
              {rocket.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ReservedRocketsList
