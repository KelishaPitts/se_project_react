import ItemCard from "./ItemCard.js";
import "../blocks/clothesSection.css";
import {CurrentUserContext} from "../contexts/CurrentUserContext.js";
import { useContext } from "react";

const ClothesSection = ({
  onSelectCard,
  onCardDelete,
  clothingItems,
  onAddItem,
  onCreateModal}
) => {
  const currentUser = useContext(CurrentUserContext)
  return (
    
    <div className="clothesSection">
      <div className="clothesSection__items">
        {clothingItems.filter((clothingItems)=>clothingItems.owner=== undefined ? "": currentUser?.data?._id).map((item) => { return (
          <ItemCard
            key={item.id}
            item={item}
            onAddItem={onAddItem}
            onSelectCard={onSelectCard}
            onCardDelete={onCardDelete}
            onCreateModal={onCreateModal}
          />
        )})}
      </div>
    </div>
  );
};
export default ClothesSection;
