import React from 'react';
import { Snackbar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import * as generalSanckBarActions from '../../store/actions/generalSanckBarActions';
import Alert from '../../components/ui/Alert/Alert';
import { useSelector } from 'react-redux';

export const SHOW_SUCCESS_SNACKBAR = 'success';
export const SHOW_INFO_SNACKBAR = 'info';
export const SHOW_WARNING_SNACKBAR = 'warning';
export const SHOW_ERROR_SNACKBAR = 'error';

const GlobalSnackbarContainer = () => {
    const dispatch = useDispatch();
    const snackbarDuration = useSelector(state => state.snackbar.duration);
    const snackbarMessageType = useSelector(state => state.snackbar.messageType);
    const snackbarMessageText = useSelector(state => state.snackbar.messageText);
    const snackbarIsOpen = useSelector(state => state.snackbar.isOpen);

    const handleClose = () => {
        dispatch(generalSanckBarActions.setShowSnackbar(snackbarDuration, snackbarMessageType, snackbarMessageText, false));
    }

    return (
        <Snackbar open={snackbarIsOpen} autoHideDuration={snackbarDuration} onClose={handleClose}>
            <Alert onClose={handleClose} severity={snackbarMessageType}>
                {snackbarMessageText}
            </Alert>
        </Snackbar>
    )
}

export default GlobalSnackbarContainer
