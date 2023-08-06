import "../blocks/header.css";
import React, { useState, useEffect, useContext } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import {CurrentUserContext} from "../contexts/CurrentUserContext";




const Header = ({ onCreateModal, onLoginModal, onRegisterModal, city, showMobile, onLogin}) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);
const userData = currentUser? currentUser: {name: "", avatar: ""}
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isMobile, IsNotMobile] = useState(true)
 

  const handleToggleSwitchChange = () => {
    
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

 
 
//choose the screen size 
const handleResize = (evt) => {
  evt.preventDefault();
  if (window.innerWidth > 768) {
      IsNotMobile(true)
  } else {
      IsNotMobile(false)
  }
}

// create an event listener
useEffect(() => {
  
  window.addEventListener("resize", handleResize)
})



  return (
    <header className="header">
      <div className="header__container-right">
        <div className="header__logo-container">
          <div className="header__logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <button className="header__button-modal"
           type="submit"
          onClick={()=>  showMobile()} />

        </div>
        <div className="header__location">
          {currentDate}, {city}
        </div>
      </div>

      <div className="header__container-left">
        <div className="header__temp-switch">
          <ToggleSwitch
            id="toggleSwitch"
            handleToggle={handleToggleSwitchChange}
            onChange={handleToggleSwitchChange}
            value={currentTemperatureUnit}
          />
        </div>
        
        {isMobile ?
        <div className="header__nav">
          {onLogin ?
          <>
          <button
            className="header__addButton"
            type="submit"
            onClick={() => {onCreateModal()}}
          >
            {" "}
            + Add Clothes
          </button>
          
          <div className="header__avatar-container">
            <div className="header__name">{userData.name}</div>
            {userData?.name ? 
            <div className="header__avatar">
              <NavLink to="/profile">
                <img className="header__avatar-image" src={userData.avatar} alt="avatar" />
              </NavLink>
            </div>: userData.name?.[0]}
          </div> </>:<div> 
                  <button className="header__signUp"
                  type="submit"
                  onClick={() => {onRegisterModal()}}
                  >Sign Up</button>
                  <button className="header__logIn"
                  type="submit"
                  onClick={() => {onLoginModal()}}>Log In</button>
                  </div>}
        </div> :null } 
      </div>
    </header>
  );
};

export default Header;
