import * as React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { Cards } from './components/Cards/Cards';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';

function App() {
  const serverURL = 'http://localhost:9000';
  const [app, setApp] = useState({
    value: '',
    arrayCards: [],
    update: true,
  })

  useEffect(() => {
    // Вызов useEffect при старте и далее при изменении параметра app.update
    console.log('useEffect');
    fetch(`${serverURL}/notes`)
      .then((response) => response.json())
      .then((body) => {
        setApp({
          ...app,
          ['value']: '',
          ['arrayCards']: [...body],
        });
      });
  }, [app.update]);

  const onChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Изменение содержимого в textarea
    setApp({
      ...app,
      ['value']: event.target.value,
    });
  }
  
  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    // Отправка формы (событие submit)
    event.preventDefault();
    const elementForm = event.target as HTMLFormElement;
    const responsePost = await fetch(`${serverURL}/notes`, {
      method: 'POST',
      body: new FormData(elementForm),
    });
    if (responsePost.status === 204) {
      setApp({
        ...app,
        ['update']: !app.update,
      });
    }
  }

  const onClickUpdata = () => {
    // Нажали кнопку обновить данные
    setApp({
      ...app,
      ['update']: !app.update,
    });
  }

  const onClickCross = async (event: React.ClipboardEvent<HTMLDivElement>) => {
    // Удаляем карточку
    const target = event.target as HTMLDivElement;
    const parent = target.closest('.cards__item');
    if (parent) {
      const { id } = parent;
      const responsePost = await fetch(`${serverURL}/notes/${id}`, {
        method: 'DELETE',
      });
      if (responsePost.status === 204) {
        setApp({
          ...app,
          ['update']: !app.update,
        });
      }
    }
  }

  return (
    <div className="conteiner">
      <Header title="Notes" clickBtn={onClickUpdata} />
      <Cards arrayCards={app.arrayCards} callback={onClickCross} />
      <Form title="New Note" callbackSubmit={onSubmitForm} callbackChange={onChangeTextarea} value={app.value} />
    </div>
  )
}

export default App
