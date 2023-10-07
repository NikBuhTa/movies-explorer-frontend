import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import { useEffect, useState } from 'react';
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
import { MobileSizeContext } from '../../contexts/MobileSizeContext.js';
import SideBar from '../SideBar/SideBar.js';
import { SideBarContext } from '../../contexts/SideBarContext.js';
import { NavParamsContext } from '../../contexts/NavParamsContext.js';

function App() {
  
  const [login, setLogin] = useState(true);
  const [isMovies, setIsMovies] = useState(false);
  const [isSavedMovies, setIsSavedMovies] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);
  const [isMain, setIsMain] = useState(false)

  const toggleSideBar = () => {
    setIsSideBar(!isSideBar);
  }

  const handleMoveToMovies = () => {
    setIsMovies(true);
  }

  const handleMoveToSavedMovies = () => {
    setIsSavedMovies(true);
  }
  const handleLeaveMovies = () => {
    setIsMovies(false);
  }

  const handleLeaveSavedMovies = () => {
    setIsSavedMovies(false);
  }

  const handleMoveToMain = () => {
    setIsMain(true);
  }

  const handleLeaveMain = () => {
    setIsMain(false);
  }

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setIsMobileSize(window.innerWidth < 880)
    });
    setIsMobileSize(window.innerWidth < 880);
    setIsMain(true);
  }, [])

//HeaderAuthFilms
  return (
    <MobileSizeContext.Provider value={isMobileSize}>
    <SideBarContext.Provider value={{isSideBar, toggleSideBar}}>
    <NavParamsContext.Provider value={{isMain, isMovies, isSavedMovies, handleLeaveMovies, handleLeaveSavedMovies, handleMoveToMovies, handleMoveToSavedMovies, handleLeaveMain, handleMoveToMain}}>
      <Routes>
        <Route path='/' element={ <WebPage content={
        <>
          {login ?
            <>
              <SideBar />
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
            <Movies /> 
          }/>
        <Route path='saved-movies' element={
            <SavedMovies />
        }/>
        <Route path='signup' element={ <Register /> } />
        <Route path='signin' element={ <Login /> } />
        <Route path='profile' element={ <Profile /> } />
        <Route path='*' element={ <WebPage content={
          <PageNotFound />
        }/>} />
      </Routes>
    </NavParamsContext.Provider>
    </SideBarContext.Provider>
    </MobileSizeContext.Provider>
  );
}

export default App;
