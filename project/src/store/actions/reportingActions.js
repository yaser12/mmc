import * as types from './types';

export const getAllModules = (lang_idData) => ({
  type: types.GET_ALL_MODULES,  // used for triggering getAllBerichteSaga 
  data: {
    lang_id: lang_idData
  }
});

export const getAllBerichte = () => ({
  type: types.GET_All_BERICHTE,  // used for triggering getAllBerichteSaga 
});

export const setModules = (allModulesData) => ({
  type: types.SET_ALL_MODULES, // used from saga to trigger reducer
  data: {
    allModules: allModulesData
  }
});
export const setCurrentModule = (currentModuleData) => ({
  type: types.SET_CURRENT_MODULE, // used from saga to trigger reducer
  data: {
    current_module: currentModuleData
  }
});

export const setBerichtes = (allBerichteData) => ({
  type: types.SET_All_BERICHTE, // used from saga to trigger reducer
  data: {
    allBerichte: allBerichteData
  }
});
export const addTextBlockToSection = (chapter, section, textBlock) => ({
  type: types.ADD_TEXT_BLOCK_TO_SECTION,  // used for triggering addTextBlockToSectionSage 
  data: {
    chapterData: chapter,
    sectionData: section,
    textBlockData: textBlock,
  }
});
export const setAddTextBlockToSection = (chapterDataToReducer, sectionDataToReducer, textBlockDataToReducer) => ({
  type: types.SET_ADD_TEXT_BLOCK_TO_SECTION, // used from saga to trigger reducer
  data: {
    chapterData: chapterDataToReducer,
    sectionData: sectionDataToReducer,
    textBlockData: textBlockDataToReducer,
  }
});
export const removeTextBlockFromSection = (chapterDataToSaga, sectionDataToSaga, textBlockDataToSaga) => ({
  type: types.REMOVE_TEXT_BLOCKFROM_SECTION,  // used for triggering removeTextBlockFromSectionSage 
  data: {
    chapterData: chapterDataToSaga,
    sectionData: sectionDataToSaga,
    textBlockData: textBlockDataToSaga,
  }
});
export const setRemoveTextBlockFromSection = (chapter, section, textBlock) => ({
  type: types.SET_REMOVE_TEXT_BLOCKFROM_SECTION, // used from saga to trigger reducer
  data: {
    chapterData: chapter,
    sectionData: section,
    textBlockData: textBlock,
  }
});
export const saveTextBlockFromSection = (chapterDataToSaga, sectionDataToSaga, textBlockDataToSaga) => ({
  type: types.SAVE_TEXT_BLOCKFROM_SECTION,  // used for triggering saveTextBlockFromSectionSage 
  data: {
    chapterData: chapterDataToSaga,
    sectionData: sectionDataToSaga,
    textBlockData: textBlockDataToSaga,
  }
});
export const setSaveTextBlockFromSection = (chapter, section, textBlock) => ({
  type: types.SET_SAVE_TEXT_BLOCKFROM_SECTION, // used from saga to trigger reducer
  data: {
    chapterData: chapter,
    sectionData: section,
    textBlockData: textBlock,
  }
});
/////////////////////// manage  custom chapters delete add rename///
export const deleteCustomChapterFromModule = (chapterDataToSaga) => ({
  type: types.DELETE_CUSTOM_CHAPTER_FROM_MODULE,  // used for triggering deleteCustomChapterFromModuleSage 
  data: {
    chapterData: chapterDataToSaga
  }
});
export const setDeleteCustomChapterFromModule = (chapter) => ({
  type: types.SET_DELETE_CUSTOM_CHAPTER_FROM_MODULE, // used from saga to trigger reducer
  data: {
    chapterData: chapter
  }
});
export const renamCustomChapter = (chapterToSaga) => ({
  type: types.RENAME_CUSTOM_CHAPTER_FROM_MODULE, // used for triggering  renamCustomChapterSage 
  data: {
    chapterData: chapterToSaga
  }
});
export const setRenamCustomChapter = (chapter) => ({
  type: types.SET_RENAME_CUSTOM_CHAPTER_FROM_MODULE, // used from saga to trigger reducer
  data: {
    chapterData: chapter
  }
});
export const addCustomChapterToModuleByLang = (chapterToSaga, moduleToSaga, lang_idToSaga) => ({
  type: types.ADD_Custom_CHAPTER_TO_MODULE_BY_LANG, // used from saga to trigger reducer
  data: {
    chapterData: chapterToSaga,
    moduleData: moduleToSaga,
    lang_idData: lang_idToSaga
  }
});
export const setAddCustomChapterToModuleByLang = (chapter, module, lang_id) => ({
  type: types.SET_ADD_Custom_CHAPTER_TO_MODULE_BY_LANG, // used from saga to trigger reducer
  data: {
    chapterData: chapter,
    moduleData: module,
    lang_idData: lang_id
  }
});
/////////////////////// manage  custom section delete add rename///
export const deleteCustomSectionFromModule = (sectionToSaga) => ({
  type: types.DELETE_CUSTOM_SECTION_FROM_CHAPTER, // used from saga to trigger reducer
  data: {
    sectionData: sectionToSaga
  }
});
export const setDeleteCustomSectionFromModule = (chapter, section) => ({
  type: types.SET_DELETE_CUSTOM_SECTION_FROM_CHAPTER, // used from saga to trigger reducer
  data: {
    chapterData: chapter,
    sectionData: section
  }
});
export const renamCustomSection = (sectionToSaga) => ({
  type: types.RENAME_CUSTOM_SECTION_FROM_CHAPTER, // used from saga to trigger reducer
  data: {
    sectionData: sectionToSaga
  }
});
export const setRenamCustomSection = (section) => ({
  type: types.SET_RENAME_CUSTOM_SECTION_FROM_CHAPTER, // used from saga to trigger reducer
  data: {
    sectionData: section
  }
});
export const addCustomSectionToChapterByLang = (chapterToSaga, sectionToSaga, lang_idToSaga) => ({
  type: types.ADD_CUSTOM_SECTION_TO_CHAPTER_BY_LANG, // used from saga to trigger reducer
  data: {
    chapterData: chapterToSaga,
    sectionData: sectionToSaga,
    lang_idData: lang_idToSaga
  }
});
export const setAddCustomSectionToChapterByLang = (chapter, section, lang_id) => ({
  type: types.SET_ADD_CUSTOM_SECTION_TO_CHAPTER_BY_LANG, // used from saga to trigger reducer
  data: {
    chapterData: chapter,
    sectionData: section,
    lang_idData: lang_id
  }
});

////////////////////////////////////////////////////////////