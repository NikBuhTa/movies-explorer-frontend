export default function filmsRender(films, isMobSize, isTabSize) {
    const result = [];
    if ((isMobSize === false) && (isTabSize === false)){
        for (let i = 0; i < 16; i++) {
            if(films[i]){
                result.push(films[i])
            }
        }
    } else if ((isTabSize === true) && (isMobSize === false)) {
        for (let i = 0; i < 8; i++) {
            if(films[i]){
                result.push(films[i])
            }
        }
    } else {
        for (let i = 0; i < 5; i++) {
            if(films[i]){
                result.push(films[i])
            }
        }
    }
    return(result);
}