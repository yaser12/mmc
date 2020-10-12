export const SAVE_lICENSE_CODE = 'SAVE_lICENSE_CODE';                    // used for triggering saveLicenseCodeSaga 
export const CHECK_lICENSE_CODE = 'CHECK_lICENSE_CODE';                  // used for triggering checkLicenseCodeSaga 
export const SET_LICENSE_CODE = 'SET_LICENSE_CODE';  // used from saga to trigger reducer 
export const CHECK_LICENSE_CODE_FAILURE = 'CHECK_LICENSE_CODE_FAILURE';  // used from saga to trigger reducer 

export const AUTH_USER = 'AUTH_USER';               // used for triggering authUserSaga 
export const AUTH_CHECK = 'AUTH_CHECK';             // used for triggering checkAuthSaga
export const AUTH_SUCCESS = 'AUTH_SUCCESS';         // used from saga to trigger reducer 
export const AUTH_FAILURE = 'AUTH_FAILURE';         // used from saga to trigger reducer 
export const INIT_LOGOUT = 'INIT_LOGOUT';           // user for triggering logoutUserSaga
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';     // user from Saga to trigger reducer
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';     // user from Saga to trigger reducer(currently no reducer equavalente for it)

/////////////// berichte reports /////////////////


export const GET_ALL_MODULES = 'GET_ALL_MODULES';  // used for triggering getAllModuleSage 
export const SET_ALL_MODULES = 'SET_ALL_MODULES';  // used from saga to trigger reducer 
export const SET_CURRENT_MODULE = 'SET_CURRENT_MODULE';  // used from container to trigger reducer 

export const GET_All_BERICHTE = 'GET_All_BERICHTE';  // used for triggering getAllBerichteSage 
export const SET_All_BERICHTE = 'SET_All_BERICHTE';  // used from saga to trigger reducer 

export const ADD_TEXT_BLOCK_TO_SECTION = 'ADD_TEXT_BLOCK_TO_SECTION';  // used for triggering addTextBlockToSectionSage 
export const SET_ADD_TEXT_BLOCK_TO_SECTION = 'SET_ADD_TEXT_BLOCK_TO_SECTION';  // used from saga to trigger reducer 

export const REMOVE_TEXT_BLOCKFROM_SECTION = 'REMOVE_TEXT_BLOCKFROM_SECTION';  // used for triggering removeTextBlockFromSectionSage 
export const SET_REMOVE_TEXT_BLOCKFROM_SECTION = 'SET_REMOVE_TEXT_BLOCKFROM_SECTION';  // used from saga to trigger reducer 

export const SAVE_TEXT_BLOCKFROM_SECTION = 'SAVE_TEXT_BLOCKFROM_SECTION';  // used for triggering saveTextBlockFromSectionSage 
export const SET_SAVE_TEXT_BLOCKFROM_SECTION = 'SET_SAVE_TEXT_BLOCKFROM_SECTION';  // used from saga to trigger reducer 

////CHAPTERS
export const DELETE_CUSTOM_CHAPTER_FROM_MODULE = "DELETE_CUSTOM_CHAPTER_FROM_MODULE"; //  used for triggering deleteCustomChapterFromModuleSage 
export const SET_DELETE_CUSTOM_CHAPTER_FROM_MODULE = "SET_DELETE_CUSTOM_CHAPTER_FROM_MODULE"; // used from saga to trigger reducer 
export const RENAME_CUSTOM_CHAPTER_FROM_MODULE = "RENAME_CUSTOM_CHAPTER_FROM_MODULE"; // used for triggering renamCustomChapterSage 
export const SET_RENAME_CUSTOM_CHAPTER_FROM_MODULE = "SET_RENAME_CUSTOM_CHAPTER_FROM_MODULE"; // used from saga to trigger reducer 
export const ADD_Custom_CHAPTER_TO_MODULE_BY_LANG = "ADD_Custom_CHAPTER_TO_MODULE_BY_LANG"; // used for triggering addCustomChapterToModuleByLangSage 
export const SET_ADD_Custom_CHAPTER_TO_MODULE_BY_LANG = "SET_ADD_Custom_CHAPTER_TO_MODULE_BY_LANG"; // used from saga to trigger reducer 
////SECTION
export const DELETE_CUSTOM_SECTION_FROM_CHAPTER = "DELETE_CUSTOM_SECTION_FROM_CHAPTER"; // used for triggering deleteCustomSectionFromChapterSage 
export const SET_DELETE_CUSTOM_SECTION_FROM_CHAPTER = "SET_DELETE_CUSTOM_SECTION_FROM_CHAPTER"; // used from saga to trigger reducer 
export const RENAME_CUSTOM_SECTION_FROM_CHAPTER = "RENAME_CUSTOM_SECTION_FROM_CHAPTER"; // used for triggering renameCustomSectionSage 
export const SET_RENAME_CUSTOM_SECTION_FROM_CHAPTER = "SET_RENAME_CUSTOM_SECTION_FROM_CHAPTER"; // used from saga to trigger reducer 
export const ADD_CUSTOM_SECTION_TO_CHAPTER_BY_LANG = "ADD_CUSTOM_SECTION_TO_CHAPTER_BY_LANG"; //  used for triggering addCustomSectionToChapterByLangSage 
export const SET_ADD_CUSTOM_SECTION_TO_CHAPTER_BY_LANG = "SET_ADD_CUSTOM_SECTION_TO_CHAPTER_BY_LANG"; // used from saga to trigger reducer 
////////////////   snackbar    /////////////////////

export const SHOW_SNACKBAR = 'SHOW_SNACKBAR'; // used from any Container component to trigger snackbar reducer 
