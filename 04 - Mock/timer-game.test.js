const timerGames = require('./timer-game');

// beforeEach(() => {
//     jest.useFakeTimers();
//     jest.spyOn(global, 'setTimeout');
// });

// afterEach(() => {
//     jest.useRealTimers();
// });

it('tests timerGame ', () => {

    timerGames.timerGame();
    expect(setTimeout).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
});

it.only('tests timerGameWithInterval', () => {
    timerGames.timerGameWithInterval();

    jest.runOnlyPendingTimers();

    expect(setTimeout).toHaveBeenCalled();
});


fit('tests timerGame ', () => {

    const callback = jest.fn();

    timerGames.timerGame(callback);

    expect(callback).toHaveBeenCalled();
});