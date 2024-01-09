import React from 'react';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './sidepanel.css';

function SidePanel() {
  const [navCollapse, setnavCollapse] = useState(false);
  const [navSmallCollapse, setSmallnavCollapse] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className='container'>
      <div className='search-bar'>
            <input type='text' placeholder='Search' value={searchText} onChange={handleSearch} />
          </div>
          <br></br>
      <nav className='nav'>
        <div className='logo'>
          <i class="bi bi-list largeDeviceIcon" onClick={e => setnavCollapse(!navCollapse)}></i>
          <i class="bi bi-list smallDeviceIcon" onClick={e => setSmallnavCollapse(!navSmallCollapse)}></i>
          <h3>Dashboard</h3>
        </div>
      </nav>

      <div className='sidebar-content'>
        <div className={`${setSmallnavCollapse ? "smallNav" : ""} sidebar-container ${navCollapse ? "navCollapse1" : ""}`}>
          <div className='nav-option option1'>
            <i class="bi bi-chat-left-dots"></i>
            <h3>Conversations</h3>
          </div>
          <div className='nav-option option1'>
            <i class="bi bi-sliders"></i>
            <h3>Automation</h3>
          </div>
          <div className='nav-option option1'>
            <i class="bi bi-bar-chart-fill"></i>
            <h3>Campaigns</h3>
          </div>
          <div className='nav-option option1'>
            <i class="bi bi-app-indicator"></i>
            <h3>Popup</h3>
          </div>
          <div className='nav-option option1'>
            <i class="bi bi-chat-fill"></i>
            <h3>Live Chats</h3>
          </div>
          <div className='nav-option option1'>
            <i class="bi bi-segmented-nav"></i>
            <h3>Segments</h3>
          </div>
          <div className='nav-option option1'>
            <i class="bi bi-sliders2"></i>
            <h3>Integrations</h3>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default SidePanel;