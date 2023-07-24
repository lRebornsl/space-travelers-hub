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
        <ul>
          <li><NavLink to="/myProfile" className="nav_profile">My Profile</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;

