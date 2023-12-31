import { ShortFilmsDuration } from "./constants";

export function filmsFilter(data, keyWord, short) {
    const regEx = new RegExp(keyWord, 'i')
    const filteredFilms = [];
    const result = [];
    data.forEach(film => {
        if (film.nameRU.match(regEx)) {
            filteredFilms.push(film);
        }
    })
    if (short === true) {
        filteredFilms.forEach(film => {
            if (film.duration <= ShortFilmsDuration) {
                result.push(film);
            }
        })
    }
    return short ? result : filteredFilms;
}