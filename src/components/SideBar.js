import "../blocks/sideBar.css";
import {NavLink} from 'react-router-dom';
const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="header__avatar-logo">
      <NavLink  to="/">
          <img src={require("../images/avatar.svg").default} alt="avatar" />
          </NavLink>
          <div className="sideBar__name">Name</div>
      </div>
    </div>
  );
};
export default SideBar;
