import { put } from "redux-saga/effects";
import { LOGIN_URL, LOGOUT_URL, LOGIN_CHECK_URL, GET_LICENSE } from '../../configs/endpointConfig';
import { LOGIN } from '../../configs/paths';
import { SHOW_ERROR_SNACKBAR } from '../../container/SnackbarContainer/GlobalSnackbarContainer';
import * as authActions from '../actions/authActions';
import * as licenseCodeActions from '../actions/licenseCodeActions';
import * as generalSanckBarActions from '../actions/generalSanckBarActions';
import AxiosInstance from '../../services/Interceptor';

export function* authUserSaga(action) {
    const { email, password } = action.data;
    try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        const response = yield AxiosInstance.post(LOGIN_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        const isSuccess = response.data.user_id > 0;
        if (isSuccess) {

            yield put(authActions.authSuccess(response.data.user_id, response.data.email));
            const GET_LICENSEresponse = yield AxiosInstance.get(GET_LICENSE);
            yield put(licenseCodeActions.setLicenseCode(GET_LICENSEresponse.data.license_key));
        } else {
            yield put(generalSanckBarActions.setShowSnackbar(4000, SHOW_ERROR_SNACKBAR, 'Username or passwort incorrect. Please try again', true));
            yield put(authActions.authFail('Something went wrong. Please try agin later.'));
        }
    } catch (error) {
        yield put(generalSanckBarActions.setShowSnackbar(4000, SHOW_ERROR_SNACKBAR, 'Username or passwort incorrect. Please try again', true));
        yield put(authActions.authFail('Something went wrong. Please try agin later.'));
    }
}

export function* checkAuthSaga(action) {
    try {
        const response = yield AxiosInstance.get(LOGIN_CHECK_URL);
        const isSuccess = response.data.user_id > 0
        if (isSuccess) {
            yield put(authActions.authSuccess(response.data.user_id, response.data.email));
            const GET_LICENSEresponse = yield AxiosInstance.get(GET_LICENSE);
            yield put(licenseCodeActions.setLicenseCode(GET_LICENSEresponse.data.license_key));
        }
    } catch (error) {

    }
}

export function* logoutUserSaga(action) {
    try {
        yield AxiosInstance.get(LOGOUT_URL);
        yield put(authActions.logoutSuccess());
        action.history.push(LOGIN);
    } catch {
        yield put(authActions.logoutFailure());
    }
}
