import { ItemCard } from "../ItemCard/ItemCard"

export const Cards = ({children, arrayCards}) => {

  return (
    <div className="conteiner__cards">
        {children}
        {
          arrayCards.map((item) => <ItemCard content={item.content} id={item.id} key={item.id} />)
        }
    </div>
  )
}
