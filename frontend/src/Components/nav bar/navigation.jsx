import  { useState } from 'react';
import './navigation.css';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/Mk-logo.jpg'; 
const NavBar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleProfileClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="profile-icon" onClick={handleProfileClick}>
        <FaUserCircle className="icon" />
      </div>
      {showPopup && <ProfilePopup onClose={() => setShowPopup(false)} />}
    </nav>
  );
};

export default NavBar;
