import logo from '../../assets/planet_logo.png';
import './Header.css'

const Header = () => {
  return (
    <header>
      <div>
        <a href="#" id="logo">
          <img src={logo} alt="logo" />
          <p>Space Traveler&apos;s Hub</p>
        </a>
      </div>
      <nav></nav>
    </header>
  )
}

export default Header;

