export default function setDuration(duration) {
    let hours = Math.floor(duration/60);
    let min = duration % 60;
    return `${hours ? `${hours}ч`: ''}${min}м`
}