import ItemCard from "./ItemCard.js";
import "../blocks/clothesSection.css";
import { defaultClothingItems } from "../utils/constants.js";

const ClothesSection = (
  onSelectCard,
  onCardDelete,
  clothingItems,
  onAddItem,
  onCreateModal
) => {
  console.log(clothingItems);
  console.log(clothingItems);
  return (
    <div className="clothesSection">
      <div className="clothesSection__items">
        {clothingItems?.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onAddItem={onAddItem}
            onSelectCard={onSelectCard}
            onCardDelete={onCardDelete}
            onCreateModal={onCreateModal}
          />
        ))}
      </div>
    </div>
  );
};
export default ClothesSection;
