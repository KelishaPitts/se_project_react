const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div key={item.id}>
      <div className="card__container">
        <div className="card__name">{item.name}</div>
        <div>
          <img
            className="card__image"
            src={item.imageUrl}
            alt={item.name}
            onClick={() => onSelectCard(item)}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
