import * as TYPES from './TimerActionTypes';

export const resetCounter = () => {
    return {
        type: TYPES.RESET_COUNTER
    }
}
export const updateCounter = interval => {
    return {
        type: TYPES.UPDATE_COUNTER,
        interval
    }
}
export const startCounter = counterTimer => {
    return {
        type: TYPES.START_COUNTER,
        counterTimer
    }
}
export const stopCounter = () => {
    return {
        type: TYPES.STOP_COUNTER
    }
}

export const updateClock = newDate => {
    return {
        type: TYPES.UPDATE_CLOCK,
        newDate
    }
}
export const startClock = clockTimer => {
    return {
        type: TYPES.START_CLOCK,
        clockTimer
    }
}
export const stopClock = () => {
    return {
        type: TYPES.STOP_CLOCK
    }
}


export const switchCounter = (started, currentTime) => {
    return dispatch => {
        if (!started) {
            const interval = 10; //0.01 second
            const counterTimer = setInterval(() => { dispatch( updateCounter(interval) ); }, interval);
            dispatch( updateCounter(interval) );
            dispatch( startCounter(counterTimer) );

        } else {
            dispatch( stopCounter() );
        }
    }
}
export const switchClock = started => {
    return dispatch => {
        if (!started) {
            const interval = 1000; //1 second
            const clockTimer = setInterval(() => dispatch( updateClock(new Date()) ), interval);
            dispatch( updateClock(new Date()) );
            dispatch( startClock(clockTimer) );
        
        } else {
            dispatch( stopClock() );
        }
    }
}