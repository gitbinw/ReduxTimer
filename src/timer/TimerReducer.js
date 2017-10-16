import * as TYPES from './TimerActionTypes';

const initState = {
    clockStarted: false,
    clockTimer: null,
    counterTimer: null,
    counterStarted: false,
    clock: {
        hours: 0,
        minutes: 0,
        seconds: 0
    },
    counter: 0
}
const timerReducer = (state = initState, action) => {
    switch (action.type) {
        case TYPES.UPDATE_CLOCK:
            return {
                ...state,
                clock: {
                    hours: action.newDate.getHours(),
                    minutes: action.newDate.getMinutes(),
                    seconds: action.newDate.getSeconds()
                }
            }
        
        case TYPES.START_CLOCK:
            return {
                ...state,
                clockTimer: action.clockTimer,
                clockStarted: true
            }
        
        case TYPES.STOP_CLOCK:
            clearInterval(state.clockTimer);
            return {
                ...state,
                clockTimer: null,
                clockStarted: false
            }
        
        case TYPES.UPDATE_COUNTER:
            return {
                ...state,
                counter: state.counter + action.interval
            }
        
        case TYPES.START_COUNTER:
            return {
                ...state,
                counterTimer: action.counterTimer,
                counterStarted: true
            }
        
        case TYPES.STOP_COUNTER:
            clearInterval(state.counterTimer);
            return {
                ...state,
                counterTimer: null,
                counterStarted: false
            }

        case TYPES.RESET_COUNTER:
            clearInterval(state.counterTimer);
            return {
                ...state,
                counterTimer: null,
                counterStarted: false,
                counter: 0
            }

        default:
            return state;
    }
}

export default timerReducer;