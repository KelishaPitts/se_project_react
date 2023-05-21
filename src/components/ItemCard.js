const ItemCard = ({item}) => {
  console.log("ItemCard");

        return (
          <div>
            <div>
              <img className="card__image" src={item.link} />
            </div>
            <div className="card__name">{item.name}</div>
          </div>
        );
};

export default ItemCard;
