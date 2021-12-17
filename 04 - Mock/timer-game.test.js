const timerGames = require('./timer-game');

beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setInterval');
    jest.spyOn(global, 'setTimeout');
});

afterEach(() => {
    jest.useRealTimers();
});

it('waits 1 second before ending the game', () => {
    timerGames.timerGame();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

it('allow pending timers to end before checking', () => {
    timerGames.timerGameWithInterval();

    // Fast forward and exhaust only currently pending timers
    // (but not any new timers that get created during that process)
    jest.runOnlyPendingTimers();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

it('calls the callback after 1 second', () => {
    const callback = jest.fn();

    timerGames.timerGame(callback);

    // At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled();

    // Fast-forward until all timers have been executed
    jest.runAllTimers();

    // Now our callback should have been called!
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
});