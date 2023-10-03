import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import SpanTemplate from '../SpanTemplate/SpanTemplate.js';
import Navigation from '../Navigation/Navigation.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import { useState } from 'react';
import HeaderAuthPromo from '../HeaderAuthPromo/HeaderAuthPromo';
import HeaderNoAuth from '../HeaderNoAuth/HeaderNoAuth';

function App() {
  
  const [login, setLogin] = useState(false);
//HeaderAuthFilms
  return (
    <>
      {login ? <HeaderAuthPromo /> : <HeaderNoAuth /> } 
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='movies' element={ <Movies />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
