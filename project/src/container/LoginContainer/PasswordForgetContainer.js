import React from 'react'
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as generalSanckBarActions from '../../store/actions/generalSanckBarActions';
import { SHOW_ERROR_SNACKBAR } from '../../container/SnackbarContainer/GlobalSnackbarContainer';

const PasswordForgetContainer = () => {
    const { t } = useTranslation("words");
    const dispatch = useDispatch();
    const forgot_password = () => {
        dispatch(generalSanckBarActions.setShowSnackbar(4000, SHOW_ERROR_SNACKBAR, t('This_function_is_not_yet_available'), true));
    };
    return (
        <div onClick={forgot_password}  >
            {t("forgot_password")}
        </div>
    )
}

export default PasswordForgetContainer
