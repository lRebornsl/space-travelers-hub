import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet_logo.png';
import './Header.css'

const Header = () => {
  return (
    <header className='container'>
      <div>
        <NavLink to="/" id="logo">
          <img src={logo} alt="logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </NavLink>
      </div>
      <nav>
        <ul className='flex'>
          <li><NavLink to="/" className="nav_profile">Rockets</NavLink></li>
          <li><NavLink to="/missions" className="nav_profile">Missions</NavLink></li>
          <hr className='nav_line'></hr>
          <li><NavLink to="/myProfile" className="nav_profile">My Profile</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;

