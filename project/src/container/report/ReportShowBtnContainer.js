import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TEXTBLOCKS } from '../../configs/paths';
import * as reportingActions from '../../store/actions/reportingActions';

const ReportShowBtnContainer = () => {
    const { t } = useTranslation("words");
    const dispatch = useDispatch();
    const handleberichteShowClick = () => {
        dispatch(reportingActions.getAllBerichte())
    }
    let link = <Link to={TEXTBLOCKS} onClick={handleberichteShowClick} >
        {t("berichte")}
    </Link>;

    return link;
}

export default ReportShowBtnContainer
