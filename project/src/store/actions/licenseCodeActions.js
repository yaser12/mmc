import * as types from './types';

export const saveLicenseCode = (licenseCode) => ({
  type: types.SAVE_lICENSE_CODE,         // used for triggering saveLicenseCodeSaga 
  data: licenseCode
});

export const checkLicenseCode = () => ({
  type: types.CHECK_lICENSE_CODE         // used for triggering checkLicenseCodeSaga 
});

export const setLicenseCode = (licensecodeData) => ({
  type: types.SET_LICENSE_CODE, // used from saga to trigger reducer
  data: {
    licenseCode: licensecodeData
  }
});

export const checkLicenseCodeFail = error => {
  return {
    type: types.CHECK_LICENSE_CODE_FAILURE, // used from saga to trigger reducer
    error: error
  };
};
