import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
const ItemCard = ({ item, onSelectCard, onLike}) => {
  const currentUser = useContext(CurrentUserContext);
  // Check if the item was liked by the current user
  // The likes array should be an array of ids
  const isLiked = item.likes.some((id) => id === currentUser._id);
  // Create a variable which you then set in `className` for the like button
  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button-liked" : "card__like-button"
  }`;
  return (
    <div key={item?._id}>
      <div className="card__container">
        <div className="card__header">
          <div className="card__name">{item?.name}</div>
          <button
            className={itemLikeButtonClassName}
            onClick={() => onLike(item?._id, isLiked)}
          />
        </div>
        <img
          className="card__image"
          src={item.imageUrl}
          alt={item.name}
          onClick={() => onSelectCard(item)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
