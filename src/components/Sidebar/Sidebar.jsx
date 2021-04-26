import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import SideBarData from './sidebarData';

const Sidebar = () => (
  <div className="toggle-side-bar sidebar-section page-general-color">
    {
      SideBarData.map(content => (
        <div
          key={content.id}
          className="top-content-section"
        >
          <NavLink
            activeClassName="active-link"
            exact
            to={content.path}
            className="side-bar-content"
          >
            <div className="content-icon-section">
              <i className={content.icon} />
            </div>
            <div className="content-text-section">
              {content.title}
            </div>
          </NavLink>
        </div>
      ))
    }
  </div>
);

export default Sidebar;
