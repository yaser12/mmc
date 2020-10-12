export const BACKEND_URL = 'http://localhost:3002';// 'http://176.28.21.228:23203';
export const BACKEND_IMG_URL = 'http://176.28.21.228:23203/reportimages';
export const LOGIN_URL = `${BACKEND_URL}/login/api_login`;
export const LOGOUT_URL = `${BACKEND_URL}/login/api_logout`;
export const LOGIN_CHECK_URL = `${BACKEND_URL}/login/api_login_check`;
export const ASSIGN_LICENSE = `${BACKEND_URL}/license/assign_license`;
export const GET_LICENSE = `${BACKEND_URL}/license/get_license`;


////// mock end-point ///
export const MOCK_BACKEND_URL = 'http://127.0.0.1:8000';
export const GET_ALL_MODULES_URL = `${BACKEND_URL}/defaultcustomtextblock/get_all_modules?lang_id=1`;
export const GET_ALL_BERICHTE_URL = `${BACKEND_URL}/defaultcustomtextblock/get_custom_chapters_sections_textblocks`;
export const DELETE_CUSTOM_CHAPTER_URL = `${BACKEND_URL}/defaultcustomtextblock/delete_custom_chapter`;
export const EDIT_CUSTOM_CHAPTER_URL = `${BACKEND_URL}/defaultcustomtextblock/rename_custom_chapter`;

// get_custom_chapters_sections_textblocks    get_default_chapters_sections_textblocks