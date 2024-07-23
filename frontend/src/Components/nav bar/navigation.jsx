import './navigation.css';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/Mk-logo.jpg'; 
const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="profile-icon">
        <FaUserCircle className="icon" />
      </div>
    </nav>
  );
};

export default NavBar;
