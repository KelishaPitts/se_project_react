import ItemCard from "./ItemCard.js";
import "../blocks/clothesSection.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { useContext } from "react";

const ClothesSection = ({
  onLike,
  onSelectCard,
  onCardDelete,
  clothingItems,
  onAddItem,
  onCreateModal,
  selectedCard,
}) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="clothesSection">
      <div className="clothesSection__items">
        {clothingItems
          .filter((item) => item?.owner === currentUser._id)
          .map((item) => {
            return (
              <ItemCard
                onLike={onLike}
                key={item._id}
                item={item}
                onAddItem={onAddItem}
                selectedCard={selectedCard}
                onSelectCard={onSelectCard}
                onCardDelete={onCardDelete}
                onCreateModal={onCreateModal}
              />
            );
          })}
      </div>
    </div>
  );
};
export default ClothesSection;
