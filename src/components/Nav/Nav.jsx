import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="flex">
      <form className="search flex">
        <img src="./assets/images/Search.png" alt="search" />
        <input type="search" placeholder="Search or type"/>
      </form>
      <div className="profile flex">
        <div className="route">
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="notification">
          <img src="./assets/images/notification.png" alt="notification"/>
        </div>
        <div className="photo">
          <img src="./assets/images/profile.png" alt="profile"/>
        </div>
      </div>
    </nav>
  )
}

export default Nav;