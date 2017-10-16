import React, {Component} from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import Login from '../login/Login';
import Timer from '../timer/Timer';
import loginReducer from '../login/LoginReducer';
import timerReducer from '../timer/TimerReducer';

/*middleware logger */
const logger = store => next => action => {
    console.log('action dispatching ...', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
}
/*******************/

let store = createStore(
    combineReducers({
        loginState: loginReducer,
        timerState: timerReducer
    }),
    applyMiddleware (
        thunkMiddleware,
        logger
    )
);

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Login />
                </Provider>
                <Provider store={store}>
                    <Timer />
                </Provider>
            </div>
        );
    }
}

