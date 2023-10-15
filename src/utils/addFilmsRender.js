export default function addFilmsRender(films, isMobSize, isTabSize) {
    const data = JSON.parse(localStorage.getItem('data')).films
    const result = [];
    if ((isMobSize === false) && (isTabSize === false)){
        for (let i = 0; i < 8; i++) {
            if(data[i+films.length]){
                result.push(data[i+films.length])
            }
        }
    } else if ((isTabSize === true) && (isMobSize === false)) {
        for (let i = 0; i < 4; i++) {
            if(data[i+films.length]){
                result.push(data[i+films.length])
            }
        }
    } else {
        for (let i = 0; i < 2; i++) {
            if(data[i+films.length]){
                result.push(data[i+films.length])
            }
        }
    }
    return(result);
}