import { NumberOfMobFilms, NumberOfPCFilms, NumberOfTabFilms } from "./constants";

export default function filmsRender(films, isMobSize, isTabSize) {
    const result = [];
    if ((isMobSize === false) && (isTabSize === false)){
        for (let i = 0; i < NumberOfPCFilms; i++) {
            if(films[i]){
                result.push(films[i])
            }
        }
    } else if ((isTabSize === true) && (isMobSize === false)) {
        for (let i = 0; i < NumberOfTabFilms; i++) {
            if(films[i]){
                result.push(films[i])
            }
        }
    } else {
        for (let i = 0; i < NumberOfMobFilms; i++) {
            if(films[i]){
                result.push(films[i])
            }
        }
    }
    return(result);
}