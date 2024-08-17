import { IItemCardProps } from "../../modal/modal";

export const ItemCard = (props: IItemCardProps) => {
  const { content, id, clickDelete } = props;

  return (
    <div className="cards__item" id={id}>
      <div className="item__context">
        <pre className="context">{content}</pre>
      </div>
      <button type="button" className="cards__item__btn" onClick={clickDelete}></button>
    </div>
  )
}
