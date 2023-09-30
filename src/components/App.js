import { Route, Routes } from 'react-router-dom';
import Header from './Header.js';
import SpanTemplate from './SpanTemplate/SpanTemplate.js';
import Navigation from './Navigation/Navigation.js';
import Main from './Main/Main.js';

function App() {
  //сделать стейт для авторизованных пользователей;
  return (
    <>
      <Header children={
        <>
          <Navigation children={
            <>
              {/* <SpanTemplate className='nav__films-link' text='Фильмы' />
              <SpanTemplate className='nav__saved-films-link' text='Сохраненные фильмы' /> */}
              <SpanTemplate className='nav__reg-link' text='Регистрация' />
              <SpanTemplate className='nav__log-link' text='Войти' />
            </>
          }/>
          {/* <SpanTemplate className='header__account-link' text='Аккаунт'/> */}
        </>
      }/>
      <Main />
    </>
  );
}

export default App;
