function timerGame(callback) {
    console.log('Ready....go!');
    setTimeout(() => {
        console.log("Time's up -- stop!");
        callback && callback();
    }, 1000);
}

function timerGameWithInterval(callback) {
    console.log('Ready....go!');
    setInterval(() => {
        setTimeout(() => {
            console.log("Time's up -- stop!");
            callback && callback();
        }, 1000);
    }, 100);
}

module.exports = {
    timerGame,
    timerGameWithInterval,
}