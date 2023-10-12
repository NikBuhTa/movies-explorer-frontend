import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import { useEffect, useState } from 'react';
import HeaderAuthPromo from '../HeaderAuthPromo/HeaderAuthPromo';
import HeaderNoAuth from '../HeaderNoAuth/HeaderNoAuth';
import PageNotFound from '../PageNotFound/PageNotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import WebPage from '../WebPage/WebPage.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import { MobileSizeContext } from '../../contexts/MobileSizeContext.js';
import SideBar from '../SideBar/SideBar.js';
import { SideBarContext } from '../../contexts/SideBarContext.js';
import mainApi from '../../utils/MainApi.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMovies, setIsMovies] = useState(false);
  const [isSavedMovies, setIsSavedMovies] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);
  const [isMain, setIsMain] = useState(false)
  const [currentUser, setCurrentUser] = useState({});
  const [err, setErr] = useState({});

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

  const handleRegSubmit = (info) => {
    mainApi.register(info);
    mainApi.login(info);
    setLoggedIn(true);
  }

  const handleLogin = (info) => {
    mainApi.login(info)
      .then(res => {
        setLoggedIn(true);
        handleLoadProfile()
          .catch(err => {
            setErr({status: err.status, text: err.statusText});
          });
      })
      .catch(err => {
        setErr({status: err.status, text: err.statusText});
      });
  }

  const handleLogout = () => {
    mainApi.logout();
    setLoggedIn(false);
    setCurrentUser({});
  }

  const handleLoadProfile = () => {
    return mainApi.getUserData()
      .then(user => {
        const {_id, name, email} = user.data;
        setCurrentUser({_id, name, email})
      })
  }

  const handleUpdProfile = (info) => {
    mainApi.updateUserData(info)
      .then(res => {
        setCurrentUser(res.data)
      })
      .catch(err => {
        setErr({status: err.status, text: err.statusText});
      })
  }

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setIsMobileSize(window.innerWidth < 880)
    });
    setIsMobileSize(window.innerWidth < 880);
    setIsMain(true);
    handleLoadProfile()
      .then(res => setLoggedIn(true))
      .catch(err => {
        setLoggedIn(false);
      })
  }, [])

//HeaderAuthFilms
  return (
    <MobileSizeContext.Provider value={isMobileSize}>
    <SideBarContext.Provider value={{isSideBar, toggleSideBar}}>
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path='/signup' element={ <Register onRegister={handleRegSubmit} /> } />
        <Route path='/signin' element={ <Login onLogin={handleLogin} /> } />
        <Route path='/' element={ <WebPage content={
        <>
          {loggedIn ?
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
        <Route path='/movies' element={<ProtectedRoute element={ Movies } loggedIn={loggedIn}/>} />
        <Route path='/saved-movies' element={<ProtectedRoute element={ SavedMovies } loggedIn={loggedIn}/>} /> 
        <Route path='/profile' element={<ProtectedRoute element={ Profile } err={err} onUpdate={handleUpdProfile} onLogout={handleLogout} loggedIn={loggedIn}/>} />
        <Route path='*' element={ <WebPage content={
          <PageNotFound />
        }/>} />
      </Routes>
    </CurrentUserContext.Provider>
    </SideBarContext.Provider>
    </MobileSizeContext.Provider>
  );
}

export default App;
