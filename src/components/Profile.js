import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";
import "../blocks/profile.css";

const Profile = ({
  onLike,
  clothingItems,
  onSelectCard,
  onCardDelete,
  onChangeProfile,
  onLogout,
  onCreateModal,
  onAddItem,
}) => {
  return (
    <div className="profile">
      <SideBar onChangeProfile={onChangeProfile} onLogout={onLogout} />
      <div className="profile__container">
        <div className="profile__header">
          <div>Your Items</div>
          <button
            onClick={() => onCreateModal()}
            className="profile__button-add"
          >
            +Add new
          </button>
        </div>
        <ClothesSection
          onLike={onLike}
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
