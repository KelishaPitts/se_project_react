import "../blocks/app.css";
import "../blocks/card.css";
import "../blocks/page.css";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Main from "./Main.js";
import AddItemModal from "./AddItemModal";
import { useEffect, useState } from "react";
import ItemModal from "./ItemModal.js";
import { getWeatherForcast, parseWeatherData } from "../utils/weatherApi.js";
import { escKey } from "../utils/constants";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile.js";
import { getItemList, addItem, deleteItem } from "../utils/api";

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [overCast, setOverCast] = useState("Rain");
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

  const handleAddItemSubmit = (item) => {
    addItem(item)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteCard = (card) => {
    deleteItem(card.id)
      .then(() => {
        const newCardList = clothingItems.filter((item) => item.id !== card.id);
        setClothingItems(newCardList);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    getItemList()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const clickOffPopUp = (evt) => {
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("modal__button-close")
      ) {
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
        const temperature = parseWeatherData(data).temperature;
        const city = parseWeatherData(data).city;
        const overCast = parseWeatherData(data).forcast;
        setCity(city);
        setOverCast(overCast);
        setTemp(temperature);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={setModalToCreate} city={city} />

        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              overCast={overCast}
              onCardDelete={handleDeleteCard}
              clothingItems={clothingItems}
            />
          </Route>

          <Route path="/profile">
            <Profile
              onSelectCard={handleSelectedCard}
              onCardDelete={handleDeleteCard}
              clothingItems={clothingItems}
              onAddItem={handleAddItemSubmit}
              onCreateModal={setModalToCreate}
            />
          </Route>
        </Switch>

        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            onClose={handleCloseModal}
            onAddItem={handleAddItemSubmit}
            isOpen={activeModal === "create"}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            isOpen={setModalToCreate}
            onCardDelete={handleDeleteCard}
            selectedCard={selectedCard}
            onClose={handleCloseModal}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
