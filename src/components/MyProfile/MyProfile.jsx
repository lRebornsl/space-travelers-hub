import ReservedRocketsList from '../Rockets/ReservedRocketsList';
import './MyProfile.css';

const MyProfile = () => (
  <div>
    <div id="reserved-container" className="container">
      <div>My Missions</div>
      <ReservedRocketsList />
    </div>
  </div>
)

export default MyProfile;