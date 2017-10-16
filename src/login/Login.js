import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, Control} from 'react-redux-form';
import * as LoginActions from './LoginActions';

/* Presentational Component */
class Login extends Component {
    render() {
        const {isLogining, currentUser, handleSubmit} = this.props;

        return (
            <Form model="currentUser" onSubmit={(currentUser) => handleSubmit(currentUser) }>
                <label>Username OR Email</label>
                <Control.text model="currentUser.username" id="currentUser.username" />

                <label>Password</label>
                <Control type="password" model="currentUser.password" id="currentUser.password" />
                    
                <button type="submit"> Submit</button>
                
                { isLogining && <span>Login...</span> }
            </Form>
        )
    }
}

/* Setup Container */
const mapStateToProps = state => {
    const myState = state.loginState;
    return {
        currentUser: myState.currentUser,
        isLogining: myState.isLogining
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (currentUser) => {
            dispatch(LoginActions.requestLogin(currentUser));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);