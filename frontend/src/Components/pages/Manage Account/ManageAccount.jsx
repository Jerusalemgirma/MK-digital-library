import React, { useState } from 'react';
import './ManageAccount.css'; 
import { FaUserCircle } from 'react-icons/fa'; 
import About from './About';

const ManageAccount = () => {
  const [activeLink, setActiveLink] = useState(''); 

  const handleLinkClick = (link) => {
    setActiveLink(link); 
  };

  return (
    <div className="manage-account-page">
      <div className="profile-section">
        <FaUserCircle className="profile-icon" />
        <h1 className="user-name">User Name</h1>
      </div>

      <div className="links-section">
        <a 
          href="#"
          className={`link ${activeLink === 'ebook' ? 'active' : ''}`}
          onClick={() => handleLinkClick('ebook')}
        >
          eBook
        </a>
        <a 
          href="#"
          className={`link ${activeLink === 'magazine' ? 'active' : ''}`}
          onClick={() => handleLinkClick('magazine')}
        >
          Magazine
        </a>
        <a 
          href="#"
          className={`link ${activeLink === 'video' ? 'active' : ''}`}
          onClick={() => handleLinkClick('video')}
        >
          Video
        </a>
        <a 
          href="#"
          className={`link ${activeLink === 'audio' ? 'active' : ''}`}
          onClick={() => handleLinkClick('audio')}
        >
          Audio
        </a>
        <a 
          href="#"
          className={`link ${activeLink === 'bookmark' ? 'active' : ''}`}
          onClick={() => handleLinkClick('bookmark')}
        >
          Bookmark
        </a>
        <a 
          href="#"
          className={`link ${activeLink === 'about' ? 'active' : ''}`}
          onClick={() => handleLinkClick('about')}
        >
          About
        </a>
      </div>

      <hr className="separator" />

      <div className="content-section">
        {activeLink === '' }
        {activeLink === 'ebook' }
        {activeLink === 'magazine' }
        {activeLink === 'video'  }
        {activeLink === 'audio' }
        {activeLink === 'bookmark' }
        {activeLink === 'about' && <About />}
      </div>
    </div>
  );
};

export default ManageAccount;