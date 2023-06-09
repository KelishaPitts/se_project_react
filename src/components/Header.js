import "../blocks/header.css";
import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import avatar from "../images/avatar.svg";

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
      <div className="header__container-right">
        <div className="header__logo-container">
          <div className="header__logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <button className="header__button-modal" />
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
        <div className="header__nav">
          <button
            className="header__addButton"
            type="submit"
            onClick={() => onCreateModal()}
          >
            {" "}
            + Add Clothes
          </button>
          <div className="header__avatar-container">
            <div className="header__name">Name</div>
            <div className="header__avatar">
              <NavLink to="/profile">
                <img src={avatar} alt="avatar" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
