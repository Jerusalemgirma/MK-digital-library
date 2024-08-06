import { FaHome, FaBook, FaHeadphones, FaVideo, FaRegNewspaper, FaRegCalendarAlt, FaHistory, FaListAlt } from 'react-icons/fa';
import './side.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">MK-Digital-Lib</h1>
      <Link to="/home" className="sidebar-item">
        <FaHome className="icon" />
        <span>Home</span>
      </Link>
      <Link to="/ebook" className="sidebar-item">
        <FaBook className="icon" />
        <span>Ebook</span>
      </Link>
      <Link to="/audio" className="sidebar-item">
        <FaHeadphones className="icon" />
        <span>Audio</span>
      </Link>
      <Link to="/video" className="sidebar-item">
        <FaVideo className="icon" />
        <span>Video</span>
      </Link>
      <Link to="/magazines" className="sidebar-item">
        <FaRegNewspaper className="icon" />
        <span>Magazines</span>
      </Link>
      <Link to="/myactivity" className="sidebar-item">
        <FaRegCalendarAlt className="icon" />
        <span>MyActivity</span>
      </Link>
      <Link to="/history" className="sidebar-item">
        <FaHistory className="icon" />
        <span>History</span>
      </Link>
      <Link to="/categories" className="sidebar-item">
        <FaListAlt className="icon" />
        <span>Categories</span>
      </Link>
    </div>
  );
};

export default Sidebar;
