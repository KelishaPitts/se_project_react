import "../blocks/switch.css";
import { useContext, useEffect, useState } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <div className="switch__container">
      <input
        onChange={handleToggleSwitchChange}
        value={currentTemperatureUnit}
        className="switch__checkbox"
        id={`toggle-switch`}
        type="checkbox"
      />
      <label className="switch__label" htmlFor={`toggle-switch`}>
        <span className={`switch__button`}>{currentTemperatureUnit}</span>
        <div className="switch__inner-containter">
          <div className="switch__inner-F">F</div>
          <div className="switch__inner-c">C</div>
        </div>
      </label>
    </div>
  );
};
export default ToggleSwitch;
