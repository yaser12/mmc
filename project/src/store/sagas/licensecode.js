import { put } from "redux-saga/effects";
import * as licenseCodeActions from '../actions/licenseCodeActions';
import { ASSIGN_LICENSE } from '../../configs/endpointConfig';
import AxiosInstance from '../../services/Interceptor';

export function* saveLicenseCodeSaga(action) {
    const { licenseCode } = action.data;
    var data = new FormData();
    data.append('license_key', licenseCode);
    const response = yield AxiosInstance.post(ASSIGN_LICENSE, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    if (
        response.data !== 'false'
        || true  // when ASSIGN_LICENSE API work fine we must remove condation
    )
        yield put(licenseCodeActions.setLicenseCode(licenseCode));
}
