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
import {CurrentUserContext} from "../contexts/CurrentUserContext"
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile.js";
import { getItemList, addItem, deleteItem, updateUser,addCardLike, removeCardLike } from "../utils/api";
import MobileModal from "./MobileModal.js";
import ProtectedRoute from './ProtectedRoute';
import { signIn, signUp, checkToken } from "../utils/auth";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import ChangeProfileModal from "./ChangeProfileModal";


function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [headerModal, setHeaderModal] = useState("");
  const [loginModal, setLoginModal] = useState("");
  const [registerModal, setRegisterModal] = useState("");
  const [changeProfileModal, setChangeProfileModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [overCast, setOverCast] = useState("Rain");
  const[loggedIn, setLoggedIn] = useState(false);
  const[currentUser, setCurrentUser] = useState({});
  const[token, ] = useState("")
 


  const createHeaderModal = () => {
    setHeaderModal("create");
  };
  const createLoginModal = () => {
    setLoginModal("create");
  };
  const createRegisterModal = () => {
    setRegisterModal("create");
  };

  const createChangeProfileModal = () => {
    setChangeProfileModal("create");
  };


  const setModalToCreate = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setHeaderModal("");
    setActiveModal("");
    setLoginModal("");
    setRegisterModal("");
    setChangeProfileModal("")
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };


  const closeMobileMenuHandler = () =>{
     setHeaderModal("");
  }

  const handleAddItemSubmit = (name, weather, imageUrl ) => {
    addItem(name, weather, imageUrl )
      .then(({item}) => {
        setClothingItems([item,...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  }


  

  useEffect(() => {
    const token = localStorage.getItem('jwt');
      if (token) {
        checkToken(token).then((res) => {
            setLoggedIn(true)
            setCurrentUser(res)
        }).catch((err) => {
          console.log(err);
        });
      }
    }, []);

  


//works
  const handleRegister = ({ name, avatar, email, password }) => {
    signUp({ name, avatar, email, password })
    .then((data)=> {
      setLoggedIn(true);
      setCurrentUser(data.data)
      handleCloseModal();
    })
    .catch((err) => {
      console.log(err);
    });
}

const handleUpdateProfile = ({name, avatar}) => {
  updateUser({name, avatar})
  .then((res)=> {
    setCurrentUser(res.data)
    handleCloseModal();
  })
  .catch((err) => {
    console.log(err);
  });
}


  const handleSignIn = ({email, password}) =>{
    signIn({email, password})
    .then((data)=>{
      if(data.token){
      }
      return checkToken(data.token);
    }).then((res)=>{
      setCurrentUser(res.data);
      setLoggedIn(true);
      handleCloseModal();
      
      
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleLogout = ()=>{
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem("jwt");

  }


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


  const handleLikeClick = ({ id, isLiked, currentUser }) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is now liked
    isLiked
      ? 
          addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err))
      : 
          removeCardLike(id, token) 
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err));
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
    <CurrentUserContext.Provider 
    value={currentUser}>
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onClose={handleCloseModal} onCloseMobile={closeMobileMenuHandler} onLogin={loggedIn} onCreateModal={setModalToCreate} onLoginModal={createLoginModal} onRegisterModal={createRegisterModal} showMobile={createHeaderModal}  city={city} />

        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onLike={handleLikeClick}
              onSelectCard={handleSelectedCard}
              overCast={overCast}
              onCardDelete={handleDeleteCard}
              clothingItems={clothingItems}
            />
          </Route>

          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile
              onSelectCard={handleSelectedCard}
              onCardDelete={handleDeleteCard}
              onLike={handleLikeClick}
              clothingItems={clothingItems}
              onAddItem={handleAddItemSubmit}
              onCreateModal={setModalToCreate}
              onChangeProfile={createChangeProfileModal}
              onLogout={handleLogout}
          
            />
          </ProtectedRoute>
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
        {headerModal ==="create" && (
        <MobileModal 
        onLogin={loggedIn}
        onCreateModal={setModalToCreate}
        onLoginModal={createLoginModal} 
        onRegisterModal={createRegisterModal}
        onClose={handleCloseModal}/>)}

        {loginModal ==="create" && (
        <LoginModal 
        onSignin={handleSignIn}
        onLoginModal={createLoginModal}
        onClose={handleCloseModal}/>)}

        {registerModal ==="create" && (
        <RegisterModal
        onRegisterModal={createRegisterModal}
        onRegister={handleRegister}
        onClose={handleCloseModal}/>)}

        {changeProfileModal ==="create" && (
        <ChangeProfileModal
        onChangeProfile={handleUpdateProfile}
        onChangeProfileModal={createChangeProfileModal}
        
        onClose={handleCloseModal}/>)}
        
        
      </CurrentTemperatureUnitContext.Provider>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
