import PropTypes from 'prop-types';
import './profilepopup.css';

const ProfilePopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Profile Information</h2>
        <p>Name: Meba</p>
        <p>Email: neba.t.git@gmail.com</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

ProfilePopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ProfilePopup;
