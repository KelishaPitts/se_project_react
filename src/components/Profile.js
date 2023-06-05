import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";
import "../blocks/profile.css"



const Profile = () => {
  return (

    <div className="profile"> 
      <SideBar />
      <div className="profile__container">
        <div className="profile__header">
      <div>Your Items</div>
      <button>+Add new</button>
      </div>
      <ClothesSection />
      </div>
      
    </div>
  );
};
export default Profile;
