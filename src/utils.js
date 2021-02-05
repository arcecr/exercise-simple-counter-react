const timeFormatter = (num) =>  num < 10 ? `0${ num }` : num

const toHours = (seconds) => {
    const hours = Math.floor(seconds / 60 / 60);  
    return timeFormatter(hours);
}

const toMinutes = (seconds) => {
    const minutes = Math.floor(seconds % 3600 / 60);
    return timeFormatter(minutes);
}

const toSeconds = (number) => {
    const seconds = number % 60;
    return timeFormatter(seconds);
}

export { toHours, toMinutes, toSeconds }