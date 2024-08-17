export const Header = (props) => {
  const { title, clickBtn } = props;

  return (
    <div className="conteiner__header">
      <h1 className="header__title">{title}</h1>
      <div className="btn__update" onClick={clickBtn}></div>
    </div>
  )
}
