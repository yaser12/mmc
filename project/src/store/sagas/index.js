import { takeEvery, all } from "redux-saga/effects";
import * as types from '../actions/types';
import { authUserSaga, logoutUserSaga, checkAuthSaga } from './auth';
import { saveLicenseCodeSaga } from './licensecode';
import {
  getAllBerichteSage, getAllModuleSage, addTextBlockToSectionSage, removeTextBlockFromSectionSage, saveTextBlockFromSectionSage
  , deleteCustomChapterFromModuleSage
  , renamCustomChapterSage
  , addCustomChapterToModuleByLangSage
  , deleteCustomSectionFromChapterSage
  , renameCustomSectionSage
  , addCustomSectionToChapterByLangSage
} from './berichte';

export function* watchAuth() {
  yield all([
    takeEvery(types.SAVE_lICENSE_CODE, saveLicenseCodeSaga),
    takeEvery(types.AUTH_USER, authUserSaga),
    takeEvery(types.INIT_LOGOUT, logoutUserSaga),
    takeEvery(types.AUTH_CHECK, checkAuthSaga),
    /// modules watcher
    takeEvery(types.GET_ALL_MODULES, getAllModuleSage),
    /// all report watcher
    takeEvery(types.GET_All_BERICHTE, getAllBerichteSage),
    /// TextBlock watcher
    takeEvery(types.ADD_TEXT_BLOCK_TO_SECTION, addTextBlockToSectionSage),
    takeEvery(types.REMOVE_TEXT_BLOCKFROM_SECTION, removeTextBlockFromSectionSage),
    takeEvery(types.SAVE_TEXT_BLOCKFROM_SECTION, saveTextBlockFromSectionSage)
    /// Chapter watcher
    , takeEvery(types.DELETE_CUSTOM_CHAPTER_FROM_MODULE, deleteCustomChapterFromModuleSage) // delete chapter
    , takeEvery(types.RENAME_CUSTOM_CHAPTER_FROM_MODULE, renamCustomChapterSage) // rename chapter
    , takeEvery(types.ADD_Custom_CHAPTER_TO_MODULE_BY_LANG, addCustomChapterToModuleByLangSage) // add chapter
    /// Section watcher
    , takeEvery(types.DELETE_CUSTOM_SECTION_FROM_CHAPTER, deleteCustomSectionFromChapterSage) // delete section
    , takeEvery(types.RENAME_CUSTOM_SECTION_FROM_CHAPTER, renameCustomSectionSage) // rename section
    , takeEvery(types.ADD_CUSTOM_SECTION_TO_CHAPTER_BY_LANG, addCustomSectionToChapterByLangSage) // add section
  ])
}