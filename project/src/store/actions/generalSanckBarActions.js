import * as types from './types';

export const setShowSnackbar = (duration, messageType, messageText, isOpen) => ({
  type: types.SHOW_SNACKBAR, // used from  any Container component to trigger reducer
  data: {
    durationData: duration,
    messageTypeData: messageType,
    messageTextData: messageText,
    isOpenData: isOpen

  }
});


