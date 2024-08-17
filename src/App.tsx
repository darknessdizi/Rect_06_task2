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
  })

  useEffect(() => {
    console.log('begin');
    fetch(`${serverURL}/notes`)
      .then((response) => response.json())
      .then((body) => {
        setApp({
          ...app,
          ['arrayCards']: [...body],
          ['value']: '',
        });
      });
  }, []);

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
      const responseGet = await fetch(`${serverURL}/notes`);
      const body = await responseGet.json();
      setApp({
        ...app,
        ['arrayCards']: [...body],
        ['value']: '',
      });
    }
  }

  return (
    <div className="conteiner">
      <Header title="Notes" />
      <Cards arrayCards={app.arrayCards} />
      <Form title="New Note" callbackSubmit={onSubmitForm} callbackChange={onChangeTextarea} value={app.value} />
    </div>
  )
}

export default App
