import { useState } from 'react';
import './App.css';

function App() {
  

  return (
    <div className="conteiner">

      <div className="conteiner__header">
        <h1 className="header__title">Notes</h1>
        <div className="btn__update"></div>
      </div>

      <div className="conteiner__form">
        <form className="form__content">
          <label className="c">
            <span className="label__content">New Note</span>
            <textarea className="form__textarea" name="text" rows="10" required ></textarea>
          </label>
          <button type="submit" className="form__btn"></button>
        </form>
      </div>

      <div className="conteiner__cards">
        <div className="cards__item">
          <div className="item__context">
            <p>много текста много текста много текста много текста много текста много текста</p>
          </div>
          <button type="button" className="cards__item__btn"></button>
        </div>

        <div className="cards__item">
          <div className="item__context">
            <p>много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текста много текстамного текста много текста много текста много текста много текста много текста</p>
          </div>
          <button type="button" className="cards__item__btn"></button>
        </div>
      </div>

    </div>
  )
}

export default App
