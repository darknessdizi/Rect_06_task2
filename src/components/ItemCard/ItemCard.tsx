export const ItemCard = (props) => {
  const { content, id } = props;

  return (
    <div className="cards__item" id={id}>
      <div className="item__context">
        <p>{content}</p>
      </div>
      <button type="button" className="cards__item__btn"></button>
    </div>
  )
}
