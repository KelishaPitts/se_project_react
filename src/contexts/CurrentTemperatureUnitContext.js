import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  handleChange: () => {},
});

export default CurrentTemperatureUnitContext;
