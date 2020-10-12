import * as types from '../actions/types';

const initialState = {
    duration: null,
    messageType: null,
    messageText: null,
    isOpen: false,
};

const snackbar = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_SNACKBAR:
            return {
                ...state,
                duration: action.data.durationData,
                messageType: action.data.messageTypeData,
                messageText: action.data.messageTextData,
                isOpen: action.data.isOpenData
            }
        default:
            return state;
    }
}

export default snackbar;