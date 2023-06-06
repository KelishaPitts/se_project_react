import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";
import "../blocks/profile.css";

debugger;
const Profile = (
  clothingItems,
  onSelectCard,
  onCardDelete,
  onCreateModal,
  onAddItem
) => {
  return (
    <div className="profile">
      <SideBar />
      <div className="profile__container">
        <div className="profile__header">
          <div>Your Items</div>
          <button onClick={onCreateModal} className="profile__button-add">
            +Add new
          </button>
        </div>
        <ClothesSection
          clothingItems={clothingItems}
          onSelectCard={onSelectCard}
          onCardDelete={onCardDelete}
          onAddItem={onAddItem}
          onCreateModal={onCreateModal}
        />
      </div>
    </div>
  );
};
export default Profile;
