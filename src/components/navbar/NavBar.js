import React, { Fragment } from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Fragment>
      <header className="nav-container">
        <nav className="nav">
          <ul className="list">
            <li className="list-item">
              <img src="/" alt="" />
            </li>
            <li className="dashboard">Dashboard</li>
            <li className="insurance">Buy Insurance</li>
            <li className="account-settings">Account Settings</li>
            <li className="profile">Lois Durello</li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default NavBar;
