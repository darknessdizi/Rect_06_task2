export const Form = (props) => {
  const { title, callbackSubmit, callbackChange, value } = props;

  return (
    <div className="conteiner__form">
      <form className="form__content" onSubmit={callbackSubmit}>
        <label className="c">
          <span className="label__content">{title}</span>
          <textarea className="form__textarea" value={value} name="content" rows="10" required onChange={callbackChange}></textarea>
        </label>
        <button type="submit" className="form__btn"></button>
      </form>
    </div>
  )
}
