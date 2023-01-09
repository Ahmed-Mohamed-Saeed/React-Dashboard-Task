import React from 'react';
import "./Aside.css";
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <aside className="flex">
      <div className="aside-body">
        <div className="logo">
          <Link to="/" className="flex">
            <div className="logo-img">
              <img src="./assets/images/logo.png" alt="logo" />
            </div>
            <div className="logo-text">
              <p>Motiv.</p>
            </div>
          </Link>
        </div>
        <div className="lists">
          <div className="list flex">
            <img src="./assets/images/dashboard icon.png" alt="dashboard"/>
            <Link to="/dashboard">Dashboard</Link>
          </div>

          <div className="list flex">
            <img src="./assets/images/Line.png" alt="line"/>
            <p>Assets</p>
          </div>

          <div className="list active flex">
            <img src="./assets/images/Vector.png" alt="vector"/>
            <Link to="/" className="flex">
            <div className="logo-text">
              <p>Booking</p>
            </div>
          </Link>
        </div>

          <div className="list flex">
            <img src="./assets/images/Shopping Bag.png" alt="shop"/>
            <p>Sell Cars</p>
          </div>

          <div className="list flex">
            <img src="./assets/images/Cart.png" alt="cart"/>
            <p>Buy Cars</p>
          </div>

          <div className="list flex">
            <img src="./assets/images/Services.png" alt="services"/>
            <p>Services</p>
          </div>

          <div className="list flex">
            <img src="./assets/images/Calendar.png" alt="calendar"/>
            <p>Calendar</p>
          </div>

          <div className="list flex">
            <img src="./assets/images/Comment.png" alt="comment"/>
            <p>Messages</p>
          </div>
        </div>
      </div>

      <div className="aside-footer">
        <div className="lists">
          <div className="list flex">
            <img src="./assets/images/Cog.png" alt="Cog"/>
            <p>Settings</p>
          </div>

          <div className="list flex">
            <img src="./assets/images/Logout.png" alt="Logout"/>
            <p>Log out</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Aside;