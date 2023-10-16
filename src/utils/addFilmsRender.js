import { AddNumberOfMobFilms, AddNumberOfPCFilms, AddNumberOfTabFilms } from "./constants";

export default function addFilmsRender(films, isMobSize, isTabSize) {
    const data = JSON.parse(localStorage.getItem('data')).films
    const result = [];
    if ((isMobSize === false) && (isTabSize === false)){
        for (let i = 0; i < AddNumberOfPCFilms; i++) {
            if(data[i+films.length]){
                result.push(data[i+films.length])
            }
        }
    } else if ((isTabSize === true) && (isMobSize === false)) {
        for (let i = 0; i < AddNumberOfTabFilms; i++) {
            if(data[i+films.length]){
                result.push(data[i+films.length])
            }
        }
    } else {
        for (let i = 0; i < AddNumberOfMobFilms; i++) {
            if(data[i+films.length]){
                result.push(data[i+films.length])
            }
        }
    }
    return(result);
}