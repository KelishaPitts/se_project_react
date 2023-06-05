import { defaultClothingItems } from "../utils/constants.js";
import ItemCard from "./ItemCard.js";
import "../blocks/clothesSection.css"
const ClothesSection = (onSelectCard) => {
  return (
    <div className="clothesSection">
     <div className="clothesSection__items">
     {defaultClothingItems.map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard} />
          ))}

     </div>
    </div>
  );
};
export default ClothesSection;
