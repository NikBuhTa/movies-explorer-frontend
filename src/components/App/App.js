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
import { setDurationNumber, setDurationTime } from '../../utils/setDuration.js';
import filmsRender from '../../utils/filmsRender.js';
import addFilmsRender from '../../utils/addFilmsRender.js';
import { ImgUrl, MobWidth, TabWidth } from '../../utils/constants.js';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isTabSize, setIsTabSize] = useState(false);
  const [isMobSize, setIsMobSize] = useState(false);
  const [isSideBar, setIsSideBar] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [error, setError] = useState('');
  const [films, setFilms] = useState([]);
  const [savedFilms, setSavedFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOk, setIsOk] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(false);

  const handleFirstRender = () => {
    if (localStorage.getItem('data') === null) {
      setIsFirstRender(true);
    }
  }

  const toggleSideBar = () => {
    setIsSideBar(!isSideBar);
  }

  const handleSetFilms = (films) => {
    setFilms(films);
  }

  const handleSetIsOk = (boolean) => {
    setIsOk(boolean);
  }

  const handleRegSubmit = async (info) => {
    setIsDisabled(true)
    try{
      const res = await mainApi.register(info);
      handleLogin(info);
    }catch(err) {
        if (err.status === 409){
          alert('409 Пользователь с таким E-mail уже существует')
        } else{
          alert('Соединение с сервером не установлено')
        }
      }
      setIsDisabled(false);
  }

  const handleLogin = (info) => {
    setIsDisabled(true);
    return mainApi.login(info)
      .then(res => {
        setLoggedIn(true);
        navigate('/movies', {replace: true})
        handleLoadProfile()
      })
      .catch(err => {
        if (err.status === 401){
          alert('Неправильный Email или пароль')
        }
      })
      .finally(() => setIsDisabled(false));
  }

  const handleLogout = () => {
    mainApi.logout().catch(e => alert(e));
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem('data')
  }

  const handleLoadProfile = () => {
    return mainApi.getUserData()
      .then(user => {
        const {_id, name, email} = user.data;
        setCurrentUser({_id, name, email})
      })
  }

  const handleUpdProfile = (info) => {
    setIsDisabled(true);
    mainApi.updateUserData(info)
      .then(res => {
        setCurrentUser(res.data)
        setIsOk(true);
      })
      .catch(err => {
        if (err.status === 401) {
          alert('Вы не авторизованы');
          setLoggedIn(false)
        }
        setError({status: err.status, text: err.statusText});
      })
      .finally(() => setIsDisabled(false))
  }

  const handleCheckData = (values) => {
    if ((values.name === currentUser.name) && (values.email === currentUser.email)){
      setIsDisabled(true);
    } else {
      setIsDisabled(false)
    }
  }

  const handleFilmsSaveAndRender = (res, keyWord, short, savedMovies) => {
    const filteredFilms = filmsFilter(res, keyWord, short);
      filteredFilms.forEach(film => {
        film.duration = setDurationTime(film.duration);
        film.image.url = `${ImgUrl}${film.image.url}`;
        film.image.formats.thumbnail.url = `${ImgUrl}${film.image.formats.thumbnail.url}`
        film.checked = false;
      })
    let result = [];
    if (savedMovies.length !== 0) {
      result = handleCompareFilms(filteredFilms, savedMovies.data)
    } else {
      result = filteredFilms;
    }
    localStorage.setItem('data', JSON.stringify({films: result, keyWord, short}));
    setFilms(filmsRender(result, isMobSize, isTabSize));
  }

  const handleCompareFilms = (films, savedMovies) => {
      if (savedMovies.length !== 0) {
        films.forEach(film => {
          film.checked = false;
          savedMovies.forEach(saved => {
            if ((saved.description === film.description)){
              film.checked = true;
            }
          })
        })
      }
      return films;
  }

  const handleSearchMoviesBtnSubmit = async (keyWord, short) => {
    let res = [];
    let savedMovies = []
    try{
      setIsLoading(true);
      res = await moviesApi.getFilms();
      savedMovies = await mainApi.getFilms();
      handleFilmsSaveAndRender(res, keyWord, short, savedMovies);
    }
    catch(e) {
      if (e.status === 404) {
        handleFilmsSaveAndRender(res, keyWord, short, savedMovies);
      }
      if (e.status === 401) {
        alert('Вы не авторизованы');
        setLoggedIn(false)
      }
    }
    setIsLoading(false);
  }

  const handleSearchSavedMoviesBtnSubmit = async (keyWord, short) => {
    try{
      setIsLoading(true);
      const res = await mainApi.getFilms()
      const result = filmsFilter(res.data, keyWord, short);
      result.forEach(item => {
        item.duration = setDurationTime(item.duration)
      })
      setSavedFilms(filmsRender(result, isMobSize, isTabSize));
    } catch(e) {
      if (e.status === 401) {
        alert('Вы не авторизованы');
        setLoggedIn(false)
      }
      console.log(e)
    }
    setIsLoading(false)
  }

  const handleLoadMovies = async () => {
    setIsLoading(true);
    let savedMovies = [];
    let result = {};
    const stash = JSON.parse(localStorage.getItem('data'));
    try{
      savedMovies = await mainApi.getFilms();
      result = handleCompareFilms(stash.films, savedMovies.data);
      localStorage.setItem('data', JSON.stringify({films: result, keyWord: stash.keyWord, short: stash.short}))
      setFilms(filmsRender(result, isMobSize, isTabSize));
    } catch(e) {
      if (e.status === 404){
        stash.films.forEach(film => film.checked = false)
        result = stash.films  ;
        localStorage.setItem('data', JSON.stringify({films: result, keyWord: stash.keyWord, short: stash.short}))
        setFilms(filmsRender(result, isMobSize, isTabSize));
      }
      if (e.status === 401) {
        alert('Вы не авторизованы');
        setLoggedIn(false)
      }
    }
    setIsLoading(false)
  }

  const handleAddBtn = (data, isMobSize, isTabSize) => {
    setFilms([...films,...addFilmsRender(data, isMobSize, isTabSize)])
  }

  const handleCardBtn = (film) => {
    if (film.checked === false) {
      film.duration = setDurationNumber(film.duration);
      mainApi.addFilm({
        country: film.country,
        director: film.director,
        duration: film.duration,
        year: film.year,
        description: film.description,
        image: film.image.url,
        trailerLink: film.trailerLink,
        nameRU: film.nameRU,
        nameEN: film.nameEN,
        thumbnail: film.image.formats.thumbnail.url,
        movieId: film.id,
      })
      .catch(e => {
        if (e.status === 401) {
          alert('Вы не авторизованы');
          setLoggedIn(false)
        }
        console.log(e)
      });
    } else {
      mainApi.getFilms().then(res => {
        res.data.forEach(item => {
          if ((film.description === item.description)) {
            mainApi.deleteFilm(item._id) 
          }
        })
      }).catch(e => {
        if (e.status === 401) {
          alert('Вы не авторизованы');
          setLoggedIn(false)
        }
        console.log(e)
      })
    }
  }

  const handleDeleteBtn = async (film) => {
    try{
      const res = await mainApi.deleteFilm(film._id);
      let arr = [];
      savedFilms.forEach(item => {
        if (item._id !== film._id){
          arr.push(item);
        }
      })
      setSavedFilms([...arr]);
    }
    catch(e) {
      if (e.status === 401) {
        alert('Вы не авторизованы');
        setLoggedIn(false)
      }
      setSavedFilms([]);
    }
  }

  const handleLoadSavedMovies = async () => {
    setIsLoading(true);
    try{
      const res = await mainApi.getFilms();
      res.data.forEach(film => {
        film.duration = setDurationTime(film.duration);
      })
      setSavedFilms(res.data)
    } catch(e){
      if (e.status === 401) {
        alert('Вы не авторизованы');
        setLoggedIn(false)
      }
      setSavedFilms([]);
    }
    setIsLoading(false)
  }

  const handleResizeFunc = () => {
    setIsTabSize(window.innerWidth < TabWidth);
    setIsMobSize(window.innerWidth < MobWidth);
  }

  useEffect(() => {
    setIsFirstRender(false);
  }, [localStorage.getItem('data')])

  useEffect(() => {
    if (localStorage.getItem('data')) {
      setFilms(filmsRender(JSON.parse(localStorage.getItem('data')).films, isMobSize, isTabSize));
    }
  }, [isMobSize, isTabSize])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setTimeout(handleResizeFunc, 30)
    });
    setIsTabSize(window.innerWidth < TabWidth);
    setIsMobSize(window.innerWidth < MobWidth);
    handleFirstRender();
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
        <Route path='/signup' element={ <Register onRegister={handleRegSubmit} isDisabled={isDisabled} loggedIn={loggedIn} /> } />
        <Route path='/signin' element={ <Login onLogin={handleLogin} err={error} isDisabled={isDisabled} loggedIn={loggedIn}/> } />
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
        <Route path='/movies' element={<ProtectedRoute element={ Movies } isFirstRender={isFirstRender} setIsFirstRender={(boolean) => setIsFirstRender(boolean)} handleFirstRender={handleFirstRender} isLoading={isLoading} handleLoadMovies={handleLoadMovies} handleLikeBtn={(film) => handleCardBtn(film)} onAddBtnClick={() => handleAddBtn(films, isMobSize, isTabSize)} setFilms={(films) => handleSetFilms(films)} loggedIn={loggedIn} films={films} onSubmit={(keyWord, short) => handleSearchMoviesBtnSubmit(keyWord, short)}/>} />
        <Route path='/saved-movies' element={<ProtectedRoute element={ SavedMovies } isLoading={isLoading} handleSearchSavedMoviesBtnSubmit={(keyWord, short) => handleSearchSavedMoviesBtnSubmit(keyWord, short)} films={savedFilms} handleDeleteBtn={(film) => handleDeleteBtn(film)} handleLoadSavedMovies={handleLoadSavedMovies} loggedIn={loggedIn}/>} /> 
        <Route path='/profile' element={<ProtectedRoute element={ Profile } handleCheckData={(values) => handleCheckData(values)} isDisabled={isDisabled} setIsOk={(boolean) =>handleSetIsOk(boolean)} isOk={isOk} err={error} onUpdate={handleUpdProfile} onLogout={handleLogout} loggedIn={loggedIn}/>} />
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
