import "../blocks/header.css";
import React, {useState, useEffect} from 'react';
import ToggleSwitch from "./ToggleSwitch";


const Header = ({ onCreateModal, city }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const[currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
 const [isChecked, setIsChecked] = useState(currentTemperatureUnit === 'C');
 const handleClick = () => setIsChecked(!isChecked)
  //useEffect(() => setIsChecked(currentTemperatureUnit)==='C', [currentTemperatureUnit]);
 

 const handleToggleSwitchChange = () => {
  currentTemperatureUnit === 'F'
    ? setCurrentTemperatureUnit('C')
    : setCurrentTemperatureUnit('F');
}; 

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../images/logo.svg").default} alt="logo" />
        </div>
        <div>
          {currentDate}, {city}
        </div>
       
      </div>
      <div className="header__avatar-logo">
      <ToggleSwitch id="toggleSwitch" 
      checked={isChecked}
  
       handleToggle={handleToggleSwitchChange}
       onChange= {handleToggleSwitchChange}
       value = {currentTemperatureUnit}
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
          <img src={require("../images/avatar.svg").default} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
