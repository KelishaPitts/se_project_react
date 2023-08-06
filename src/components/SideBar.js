import "../blocks/sideBar.css";
import { useContext } from "react";
import {NavLink} from 'react-router-dom';
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import "../blocks/header.css";

const SideBar = ({onChangeProfile, onLogout}) => {
  const currentUser = useContext(CurrentUserContext);
const userData = currentUser? currentUser: {name: "", avatar: ""}
  return (
    <div className="sideBar">
      {userData?.name?
      <div className="header__avatar-logo">
      <NavLink  to="/">
          <img class="header__avatar-image" src={userData.avatar} alt="avatar" />
          </NavLink>
          <div className="sideBar__name">{userData.name}</div>
          </div>:userData.name?.[0]}
      <button className="sideBar__button-change"  onClick={()=>onChangeProfile()}>
            Change profile data
          </button>
          <button className="sideBar__button-logout" onClick={()=>onLogout()}>
            Log out
          </button>
         
    </div>
  );
};
export default SideBar;
