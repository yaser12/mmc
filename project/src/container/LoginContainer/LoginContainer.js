import React from 'react'
import { useDispatch } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import * as authActions from '../../store/actions/authActions';

const LoginContainer = () => {
    const dispatch = useDispatch();
    const login = (formValues) => {
        dispatch(authActions.authUser({
            email: formValues.email,
            password: formValues.password
        }))
    };

    return (
        <LoginForm doLogin={login} />
    )
}

export default LoginContainer
