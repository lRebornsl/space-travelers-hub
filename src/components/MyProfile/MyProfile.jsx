import ActiveMissionsList from '../Missions/ActiveMissionsList';
import ReservedRocketsList from '../Rockets/ReservedRocketsList';
import './MyProfile.css';

const MyProfile = () => (
  <div>
    <div id="reserved-container" className="container">
      <ActiveMissionsList />
      <ReservedRocketsList />
    </div>
  </div>
)

export default MyProfile;