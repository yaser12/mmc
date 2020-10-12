import { put } from "redux-saga/effects";
import * as reportingActions from '../actions/reportingActions';
import * as authActions from '../actions/authActions';
import { GET_ALL_BERICHTE_URL, GET_ALL_MODULES_URL, DELETE_CUSTOM_CHAPTER_URL, EDIT_CUSTOM_CHAPTER_URL } from '../../configs/endpointConfig';
import AxiosInstance from '../../services/Interceptor';
import { select } from 'redux-saga/effects';
import * as selectors from '../reducers/reporting';

export function* deleteCustomChapterFromModuleSage(action) {
    var data = new FormData();
    data.append('custom_chapter_id', action.data.chapterData.id);
    const response = yield AxiosInstance.post(DELETE_CUSTOM_CHAPTER_URL, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    if (
        response.data !== 'false'
        || true  // when ASSIGN_LICENSE API work fine we must remove condation
    ) {
        yield put(reportingActions.setDeleteCustomChapterFromModule(action.data.chapterData));
    }
}
export function* renamCustomChapterSage(action) {
    const currentlang_id = yield select(selectors.current_LangIdSelector);
    var data = new FormData();
    data.append('custom_chapter_id', action.data.chapterData.id);
    data.append('value', action.data.chapterData.lang.value);
    data.append('lang_id', currentlang_id);
    const response = yield AxiosInstance.post(EDIT_CUSTOM_CHAPTER_URL, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    if (
        response.data !== 'false'
        || true  // when ASSIGN_LICENSE API work fine we must remove condation
    ) {
        yield put(reportingActions.setRenamCustomChapter(action.data.chapterData));
    }
}
export function* addCustomChapterToModuleByLangSage(action) {

}
export function* addCustomSectionToChapterByLangSage(action) {

}
export function* renameCustomSectionSage(action) {

}
export function* deleteCustomSectionFromChapterSage(action) {

}

export function* getAllModuleSage(action) {
    try {
        const getAllModuleResponse = yield AxiosInstance.get(GET_ALL_MODULES_URL, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        yield put(reportingActions.setModules(getAllModuleResponse.data));
    } catch {
        yield put(authActions.logoutFailure());
    }
}

export function* getAllBerichteSage(action) {
    const currentModule = yield select(selectors.current_moduleSelector);
    const currentlang_id = yield select(selectors.current_LangIdSelector);
    try {
        const getAllBerichteResponse = yield AxiosInstance.get(GET_ALL_BERICHTE_URL + "?lang_id=" + currentlang_id + "&module_id=" + currentModule.id, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        yield put(reportingActions.setBerichtes(getAllBerichteResponse.data));
    } catch {
        yield put(authActions.logoutFailure());
    }
}

export function* addTextBlockToSectionSage(action) {
    try {
        yield put(reportingActions.setAddTextBlockToSection(action.data.chapterData, action.data.sectionData, action.data.textBlockData));
    } catch (e) {
        console.log(' in addTextBlockToSectionSage ' + e);
    }
}

export function* removeTextBlockFromSectionSage(action) {
    try {
        yield put(reportingActions.setRemoveTextBlockFromSection(action.data.chapterData, action.data.sectionData, action.data.textBlockData));
    } catch (e) {
        console.log(' in removeTextBlockFromSectionSage ' + e);
    }
}

export function* saveTextBlockFromSectionSage(action) {
    try {
        yield put(reportingActions.setSaveTextBlockFromSection(action.data.chapterData, action.data.sectionData, action.data.textBlockData));
    } catch (e) {
        console.log(' in saveTextBlockFromSectionSage ' + e);
    }
}

