import * as types from '../actions/types';

const initialState = {
    userId: null,
    email: null,
    error: null,
    isAuthenticated: false,
    licenseCode: null,
    errorChecklicenseCode: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_LICENSE_CODE:
            {
                return {
                    ...state,
                    licenseCode: action.data.licenseCode
                }
            }
        case types.CHECK_LICENSE_CODE_FAILURE:
            return {
                ...state,
                licenseCode: '',
                errorChecklicenseCode: action.errorChecklicenseCode ? action.errorChecklicenseCode : null
            }
        case types.AUTH_SUCCESS:
            return {
                ...state,
                userId: action.data.userId,
                email: action.data.email,
                isAuthenticated: true,
                error: null
            }
        case types.AUTH_FAILURE:
            return {
                ...state,
                userId: 0,
                email: null,
                error: action.error ? action.error : null
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...initialState
            }
        default:
            return state;
    }
}

export default reducer;