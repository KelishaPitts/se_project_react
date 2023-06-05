const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="header__avatar-logo">
          <img src={require("../images/avatar.svg").default} alt="avatar" />
          <div>Name</div>
      </div>
    </div>
  );
};
export default SideBar;
