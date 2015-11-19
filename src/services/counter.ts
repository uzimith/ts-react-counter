function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

export function fetchCounter() {
    return new Promise( (resolve, reject) =>
            setTimeout(() => {
                resolve(getRandomInt(1, 100))
            }, 500)
            );
}
