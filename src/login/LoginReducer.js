import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED} from './LoginActionTypes';
import {modelReducer, combineForms} from 'react-redux-form';

function showLogin(isLogining = false, action) {
    switch (action.type) {
        case LOGIN_START:
            return action.isLogining;
        
        case LOGIN_SUCCESS:
        case LOGIN_FAILED:
            return action.isLogining;
    }

    return isLogining;
}

const loginReducer = combineForms({
    currentUser: modelReducer('currentUser', {username: '', password: ''}),
    isLogining: showLogin
});

export default loginReducer;