import { useEffect, useState } from 'react';
import './App.css';
import { Cards } from './components/Cards/Cards';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { IAppState } from './modal/modal';

function App() {
  const serverURL = 'http://localhost:9000';
  const [varForUpdate, setVarForUpdate] = useState<boolean>(true);
  const [app, setApp] = useState<IAppState>({
    value: '',
    arrayCards: [],
  })

  useEffect(() => {
    // Вызов useEffect при старте и далее при изменении параметра app.update
    fetch(`${serverURL}/notes`)
      .then((response) => response.json())
      .then((body) => {
        setApp({
          ['value']: '',
          ['arrayCards']: [...body],
        });
      });
  }, [varForUpdate]);

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
      setVarForUpdate(!varForUpdate);
    }
  }

  const onClickUpdata = () => {
    // Нажали кнопку обновить данные
    setVarForUpdate(!varForUpdate);
  }

  const onClickCross = async (event: React.MouseEvent<HTMLButtonElement>) => {
    // Удаляем карточку
    const target = event.target as HTMLButtonElement;
    const parent = target.closest('.cards__item');
    if (parent) {
      const { id } = parent;
      const responsePost = await fetch(`${serverURL}/notes/${id}`, {
        method: 'DELETE',
      });
      if (responsePost.status === 204) {
        setVarForUpdate(!varForUpdate);
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
