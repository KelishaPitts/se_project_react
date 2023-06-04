import "../blocks/app.css"
import "../blocks/card.css";
import "../blocks/page.css";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Main from "./Main.js";
import ModalWithForm from "./ModalWithForm.js";
import { useEffect, useState } from "react";
import ItemModal from "./ItemModal.js";
import { getWeatherForcast, parseWeatherData } from "../utils/weatherApi.js";
import { escKey } from "../utils/constants";
import  CurrentTemperatureUnitContext  from "../contexts/CurrentTemperatureUnitContext";

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const[overCast, setOverCast] = useState("Clouds");
  const setModalToCreate = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === 'F'
      ? setCurrentTemperatureUnit('C')
      : setCurrentTemperatureUnit('F');
  }; 

  useEffect(() => {
    const clickOffPopUp = (evt) => {
      if (evt.target.classList.contains("modal") || evt.target.classList.contains("modal__button-close")) {
        handleCloseModal();
      }
    };

    document.addEventListener("click", clickOffPopUp);
    return () => {
      document.removeEventListener("click", clickOffPopUp);
    };
  }, []);

  useEffect(() => {
    const closeWithEsc = (evt) => {
      if (evt.keyCode === escKey) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", closeWithEsc);
    return () => window.removeEventListener("keydown", closeWithEsc);
  }, []);

  useEffect(() => {
    getWeatherForcast()
      .then((data) => {
        const temperature = parseWeatherData(data)[0];
        const temperatureF = parseWeatherData(data)[1];
        const temperatureC =parseWeatherData(data)[2];
        const city = parseWeatherData(data)[3];
        const overCast = parseWeatherData(data)[4];
        setCity(city);
        setOverCast(overCast);
        console.log(city)
        setTemp([temperature, temperatureF, temperatureC]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getWeatherConvert = ()=> {
    if (currentTemperatureUnit === 'F'){
      return temp[1];
    } else if (currentTemperatureUnit === 'C'){
      return temp[2]
    }
  }

  

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
      <Header onCreateModal={setModalToCreate} city={city}  />
      <Main weatherTemp={getWeatherConvert()} onSelectCard={handleSelectedCard} overCast={overCast}/>
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title="New Garment"
          buttonText="Add garment"
          onClose={handleCloseModal}
        >
          <div>
            <label className="form__label">
              Name
              <input
                className="form__input"
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                placeholder="Name"
              />
            </label>
          </div>
          <div>
            <label className="form__label">
              Image
              <input
                className="form__input"
                type="url"
                name="link"
                minLength="1"
                maxLength="30"
                placeholder="Image URL"
              />
            </label>
          </div>
          <p>Select the weather type:</p>
          <div>
            <div>
              <input
                className="form__input-radio"
                type="radio"
                id="hot"
                value="hot"
                name="weather-type"
              />
              <label className="form__label-radio">Hot</label>
            </div>
            <div>
              <input
                className="form__input-radio"
                type="radio"
                id="warm"
                value="warm"
                name="weather-type"
              />
              <label className="form__label-radio">Warm</label>
            </div>
            <div>
              <input
                className="form__input-radio"
                type="radio"
                id="cold"
                value="cold"
                name="weather-type"
              />
              <label className="form__label-radio">Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
