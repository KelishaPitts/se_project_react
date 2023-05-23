import "../blocks/app.css";
import "../blocks/card.css";
import "../blocks/page.css";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Main from "./Main.js";
import ModalWithForm from "./ModalWithForm.js";
import { useEffect, useState } from "react";
import ItemModal from "./ItemModal.js";
import { getWeatherForcast, parseWeatherData } from "../utils/weatherApi.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
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

  useEffect(() => {
    getWeatherForcast().then((data) => {
      const temperature = parseWeatherData(data)[0];
      const city = parseWeatherData(data)[1];
      setCity(city);
      setTemp(temperature);
    });
  }, []);
  console.log(temp);

  return (
    <div className="page">
      <Header onCreateModal={setModalToCreate} city={city} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
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
              />
              <label>Hot</label>
            </div>
            <div>
              <input
                className="form__input-radio"
                type="radio"
                id="warm"
                value="warm"
              />
              <label>Warm</label>
            </div>
            <div>
              <input
                className="form__input-radio"
                type="radio"
                id="cold"
                value="cold"
              />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
