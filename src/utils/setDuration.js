export function setDurationTime(duration) {
    let hours = Math.floor(duration/60);
    let min = duration % 60;
    return `${hours ? `${hours}ч`: ''}${min}м`
}

export function setDurationNumber(duration) {
    let regEx = /\d/g;
    if (duration.length >= 4) {
        let numbers = duration.match(regEx).join('')
        return numbers.length === 3 ? Number(numbers[0]) * 60 + Number(numbers[1]) * 10 + Number(numbers[2])
        : Number(numbers[0]) * 60 + Number(numbers?.[1])
    }
    
    if (duration.length < 4) {
        let numbers = duration.match(regEx).join('')
        return numbers.length === 2 ? Number(numbers[0]) * 10 + Number(numbers[1])
        : Number(numbers[0])
    }
}