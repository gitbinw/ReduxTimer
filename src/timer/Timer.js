import React from 'react';
import {connect} from 'react-redux';
import * as TimerAction from './TimerActions';

function counterSelector(counter) {
    const precision = 1000; //1 second
    let mseconds = counter % precision;
    let seconds = counter >= precision ? (counter - mseconds) / precision : 0;
    let minutes = 0;

    if (seconds >= 60) {
        const secRemain = seconds % 60;
        minutes = (seconds - secRemain) / 60;
        seconds = secRemain;
    }

    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    if (mseconds < 10) mseconds = '0' + mseconds;

    mseconds = mseconds.toString().substring(0, 2);

    return {minutes, seconds, mseconds};
}
function clockSelector(clock) {
    return {
        ...clock,
        hours: clock.hours < 10 ? '0' + clock.hours : clock.hours,
        minutes: clock.minutes < 10 ? '0' + clock.minutes : clock.minutes,
        seconds: clock.seconds < 10 ? '0' + clock.seconds : clock.seconds
    }
}

function Counter(props) {
    const counterBtnName = props.started ? 'Stop Counter' : 'Start Counter';
    return (
        <div>
            <h2>{props.minutes} : {props.seconds} . {props.mseconds}</h2>
            <div>
                <button onClick={() => props.handleCounter(props.started)}>{counterBtnName}</button>
                <button onClick={() => props.handleReset()}>Reset</button>
            </div>
        </div>
    );
}
function Clock(props) {
    const clockBtnName = props.started ? 'Stop Clock' : 'Start Clock';
    return (
        <div>
            <h2>{props.hours} : {props.minutes} : {props.seconds}</h2>

            <div>
                <button onClick={() => props.handleClock(props.started)}>{clockBtnName}</button>
            </div>
        </div>
    );
}
function Timer(props) {
    return (
        <div>
            <Clock {...props.clock} started={props.clockStarted} handleClock={props.handleClock} />
            <Counter {...props.counter} started={props.counterStarted} handleCounter={props.handleCounter} handleReset={props.handleReset} />
        </div>
    );
}

const mapStateToProps = (state) => {
    const myState = state.timerState;
    return {
        clock: clockSelector(myState.clock),
        counter: counterSelector(myState.counter),
        clockStarted: myState.clockStarted,
        counterStarted: myState.counterStarted
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleClock: (started) => {
            dispatch(TimerAction.switchClock(started));
        },
        handleCounter: started => {
            dispatch(TimerAction.switchCounter(started));
        },
        handleReset: () => {
            dispatch(TimerAction.resetCounter());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);