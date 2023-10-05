import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import { useState } from 'react';
import HeaderAuthPromo from '../HeaderAuthPromo/HeaderAuthPromo';
import HeaderNoAuth from '../HeaderNoAuth/HeaderNoAuth';
import PageNotFound from '../PageNotFound/PageNotFound';
import HeaderAuthFilms from '../HeaderAuthFilms/HeaderAuthFilms';
import SavedMovies from '../SavedMovies/SavedMovies';
import WebPage from '../WebPage/WebPage.js';
import HeaderAuthForm from '../HeaderAuthForm/HeaderAuthForm.js';
import AuthForm from '../AuthForm/AuthForm.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';

function App() {
  
  const [login, setLogin] = useState(false);
  const [isMovies, setIsMovies] = useState(false);
  const [isSavedMovies, setIsSavedMovies] = useState(false);

  const handleMoveToMovies = () => {
    setIsMovies(true);
  }

  const handleMoveToSavedMovies = () => {
    setIsSavedMovies(true);
  }


//HeaderAuthFilms
  return (
    <>
      <Routes>
        <Route path='/' element={ <WebPage content={
        <>
          {login ?
            <>
              <HeaderAuthPromo />
              <Main />
              <Footer />
            </> : 
            <>
              <HeaderNoAuth />
              <Main />
              <Footer />
            </> }
        </>
        }/> } />
        <Route path='movies' element={
            <Movies isMovies={isMovies} handleMoveToMovies={handleMoveToMovies} /> 
          }/>
        <Route path='saved-movies' element={
            <SavedMovies isSavedMovies={isSavedMovies} handleMoveToSavedMovies={handleMoveToSavedMovies} />
        }/>
        <Route path='signup' element={ <Register /> } />
        <Route path='signin' element={ <Login /> } />
        <Route path='profile' element={ <Profile /> } />
        <Route path='*' element={ <WebPage content={
          <PageNotFound />
        }/>} />
      </Routes>
    </>
  );
}

export default App;
