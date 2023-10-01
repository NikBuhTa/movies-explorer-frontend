import { Route, Routes } from 'react-router-dom';
import Header from '../Header.js';
import SpanTemplate from '../SpanTemplate/SpanTemplate.js';
import Navigation from '../Navigation/Navigation.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import { useState } from 'react';

function App() {
  
  const [login, setLogin] = useState(true); //use true/false to validate header

  return (
    <>
      {login ? <Header children={
        <>
          <Navigation children={
            <>
              <SpanTemplate className='nav__films-link' text='Фильмы' />
              <SpanTemplate className='nav__saved-films-link' text='Сохраненные фильмы' />
            </>
          }/>
          <SpanTemplate className='header__account-link' text='Аккаунт'/>
        </>
        }/> :
        <Header children={
          <Navigation children={
            <>
              <SpanTemplate className='nav__reg-link' text='Регистрация' />
              <SpanTemplate className='nav__log-link' text='Войти' />
            </>
          }/>
        }/>
      }
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='movies' element={ <Movies />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
