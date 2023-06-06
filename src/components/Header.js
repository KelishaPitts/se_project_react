import "../blocks/header.css";
import React, { useState, useEffect } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { NavLink } from 'react-router-dom';


debugger
const Header = ({ onCreateModal, city }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");


  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  return (
    <header className="header">
      <div className="header__logo">
        <div>
        <NavLink  to="/">
          <img src={require("../images/logo.svg").default} alt="logo" />
          </NavLink>
        </div>
        <div>
          {currentDate}, {city}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch
          id="toggleSwitch"
         
          handleToggle={handleToggleSwitchChange}
          onChange={handleToggleSwitchChange}
          value={currentTemperatureUnit}
        />
        <div>
          <button
            className="header__addButton"
            type="text"
            onClick={onCreateModal}
          >
            {" "}
            + Add Clothes
          </button>
        </div>
        <div>Name</div>
        <div>
        <NavLink to="/profile">
          <img src={require("../images/avatar.svg").default} alt="avatar" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
