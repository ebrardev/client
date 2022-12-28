import "./navbar.css";
import React from 'react'
import Notification from "../../img/icon1.png";
import Message from "../../img/message.svg";
import Settings from "../../img/settings.svg";

const Navbar = () => {
  return (
     <div className="navbar">
      <span className="logo">Social Media</span>
      <div className="icons">
        <div className="icon">
            <img src={Notification} className="iconImg" alt="home" />
            <div className="counter">2</div>
        </div>
      </div>
      <div className="icons">
        <div className="icon">
            <img src={Message} className="iconImg" alt="home" />
            <div className="counter">2</div>
        </div>
      </div>
      <div className="icons">
        <div className="icon">
            <img src={Settings} className="iconImg" alt="home" />
            <div className="counter">2</div>
        </div>
      </div>
     </div>
  )
}

export default Navbar