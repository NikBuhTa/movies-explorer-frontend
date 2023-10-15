import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import moviesApi from '../../utils/MoviesApi.js'
import { filmsFilter } from '../../utils/filmsFilter.js';
import setDuration from '../../utils/setDuration.js';
import filmsRender from '../../utils/filmsRender.js';
import addFilmsRender from '../../utils/addFilmsRender.js';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isTabSize, setIsTabSize] = useState(false);
  const [isMobSize, setIsMobSize] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [err, setErr] = useState({});
  const [films, setFilms] = useState([])

  const toggleSideBar = () => {
    setIsSideBar(!isSideBar);
  }

  const handleSetFilms = (films) => {
    setFilms(films);
  }

  const handleRegSubmit = (info) => {
    mainApi.register(info)
      .then(res => {
        handleLogin(info);
      })
      .catch(err => console.log(err));
  }

  const handleLogin = (info) => {
    return mainApi.login(info)
      .then(res => {
        setLoggedIn(true);
        navigate('/movies', {replace: true})
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

  const handleSearchBtnSubmit = (keyWord, short) => {
    moviesApi.getFilms().then(res => {
      const filteredFilms = filmsFilter(res, keyWord, short);
      filteredFilms.forEach(film => {
        film.duration = setDuration(film.duration);
      })
      localStorage.setItem('data', JSON.stringify({films: filteredFilms, keyWord, short}));
      setFilms(filmsRender(filteredFilms, isMobSize, isTabSize));
    })
  }

  const handleAddBtn = (data, isMobSize, isTabSize) => {
    console.log(addFilmsRender(data, isMobSize, isTabSize))
        setFilms([...films,...addFilmsRender(data, isMobSize, isTabSize)])
  }

  const handleResizeFunc = () => {
    setIsTabSize(window.innerWidth < 880);
    setIsMobSize(window.innerWidth < 450);
  }

  useEffect(() => {
      setFilms(filmsRender(JSON.parse(localStorage.getItem('data')).films, isMobSize, isTabSize));
  }, [isMobSize, isTabSize])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setTimeout(handleResizeFunc, 30)
    });
    setIsTabSize(window.innerWidth < 880);
    setIsMobSize(window.innerWidth < 450);
    handleLoadProfile()
      .then(res => setLoggedIn(true))
      .catch(err => {
        setLoggedIn(false);
      })
  }, [])

  return (
    <MobileSizeContext.Provider value={{isTabSize, isMobSize}}>
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
        <Route path='/movies' element={<ProtectedRoute element={ Movies } onAddBtnClick={() => handleAddBtn(films, isMobSize, isTabSize)} setFilms={(films) => handleSetFilms(films)} loggedIn={loggedIn} films={films} onSubmit={(keyWord, short) => handleSearchBtnSubmit(keyWord, short)}/>} />
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
