import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED} from './LoginActionTypes';
import * as Utility from '../app/Utility';

export function loginStart(loginData) {
    return {
        type: LOGIN_START,
        currentUser: loginData,
        isLogining: true
    }
}
export function loginSuccess(jData) {
    return {
        type: LOGIN_SUCCESS,
        isLogining: false
    }
}
export function loginFailed() {
    return {
        type: LOGIN_FAILED,
        isLogining: false
    }
}

export function loginCheckStart() {
    return {
        type: LOGIN_CHECK_START
    }
}
export function loginCheckSuccess() {
    return {
        type: LOGIN_CHECK_SUCCESS
    }
}
export function loginCheckFAILED() {
    return {
        type: LOGIN_CHECK_FAILED
    }
}

export function requestLogin(loginData) {
    return function(dispatch) {
        dispatch( loginStart(loginData) );

        return Utility.postData('http://localhost:3000?uq=' + (new Date().getTime()), loginData).then(jData => {
            if (jData && jData.status ==1) {
                dispatch( loginSuccess(jData) );
            } else {
                dispatch( loginFailed() );
            }
            
        }).catch(ex => {
            dispatch( loginFailed() );
        });
    }
}