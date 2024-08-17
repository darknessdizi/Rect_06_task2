import { ICardsProps } from "../../modal/modal";
import { ItemCard } from "../ItemCard/ItemCard";

export const Cards = (props: ICardsProps) => {
  const {children, arrayCards, callback} = props;

  return (
    <div className="conteiner__cards">
        {children}
        {
          arrayCards.map((item) => <ItemCard content={item.content} id={item.id} key={item.id} clickDelete={callback} />)
        }
    </div>
  )
}
