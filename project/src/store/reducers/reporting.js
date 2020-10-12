import * as types from '../actions/types';

const initialState = {
    lang_id: 1,
    modules: {},
    current_module: {},
    allBerichte: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_RENAME_CUSTOM_CHAPTER_FROM_MODULE: {
            state.allBerichte.map((chapter, chapter_index) => {
                if (chapter.id === action.data.chapterData.id) {
                    chapter.lang.value = action.data.chapterData.lang.value;

                    return {
                        ...state,
                    };
                }
            });
            return {
                ...state,
            };
        }
        case types.SET_SAVE_TEXT_BLOCKFROM_SECTION:
            {
                state.allBerichte.map((chapter, chapter_index) => {
                    if (chapter.id === action.data.chapterData.id) {
                        chapter.sections.map((section, section_index) => {
                            if (section.id === action.data.sectionData.id) {
                                section.textblocks.map((textblock, textblock_index) => {
                                    if (textblock.id === action.data.textBlockData.id) {
                                        textblock.text = action.data.textBlockData.text;
                                        return {
                                            ...state,
                                        };
                                    }
                                });
                                return {
                                    ...state,
                                };
                            }
                        }
                        )
                    } else {
                        return {
                            ...state,
                        };
                    }

                });
                return {
                    ...state,
                };
            }
        case types.SET_CURRENT_MODULE:
            {
                return {
                    ...state,
                    current_module: action.data.current_module
                }
            }
        case types.SET_ADD_TEXT_BLOCK_TO_SECTION:
            {
                state.allBerichte.map((chapter, chapter_index) => {
                    if (chapter.id === action.data.chapterData.id) {
                        chapter.sections.map((section, section_index) => {
                            if (section.id === action.data.sectionData.id) {
                                state.allBerichte[chapter_index].sections[section_index].textblocks.push
                                    (
                                        action.data.textBlockData
                                    );
                                return {
                                    ...state,
                                };
                            }
                        }
                        )
                    } else {
                        return {
                            ...state,
                        };
                    }
                    return {
                        ...state,
                    };
                });
                return {
                    ...state,
                }
            }
        case types.SET_REMOVE_TEXT_BLOCKFROM_SECTION:
            {
                state.allBerichte.map((chapter, chapter_index) => {
                    if (chapter.id === action.data.chapterData.id) {
                        chapter.sections.map((section, section_index) => {
                            if (section.id === action.data.sectionData.id) {
                                const lastTextblocks = state.allBerichte[chapter_index].sections[section_index].textblocks.filter(textblock => textblock.id !== action.data.textBlockData.id);
                                state.allBerichte[chapter_index].sections[section_index].textblocks = lastTextblocks;
                                return {
                                    ...state,
                                };
                            }
                        }
                        )
                    } else {
                        return {
                            ...state,
                        };
                    }
                    return {
                        ...state,
                    };
                });
                return {
                    ...state,
                }
            }
        case types.SET_All_BERICHTE:
            {
                return {
                    ...state,
                    allBerichte: action.data.allBerichte
                }
            }
        case types.SET_ALL_MODULES:
            {
                return {
                    ...state,
                    modules: action.data.allModules
                }
            }
        case types.SET_DELETE_CUSTOM_CHAPTER_FROM_MODULE: {
            state.allBerichte.map((chapter, chapter_index) => {
                if (chapter.id === action.data.chapterData.id) {
                    const newChapter = state.allBerichte.filter(chapter => chapter.id !== action.data.chapterData.id);
                    state.allBerichte = newChapter;
                    return {
                        ...state,
                        allBerichte: newChapter
                    };
                }
            });

        }

        case types.SET_ADD_Custom_CHAPTER_TO_MODULE_BY_LANG: {
            return {
                ...state,
            }
        }
        case types.SET_DELETE_CUSTOM_SECTION_FROM_CHAPTER: {
            return {
                ...state,
            }
        }
        case types.SET_RENAME_CUSTOM_SECTION_FROM_CHAPTER: {
            return {
                ...state,
            }
        }
        case types.SET_ADD_CUSTOM_SECTION_TO_CHAPTER_BY_LANG: {
            return {
                ...state,
            }
        }

        default:
            return state;
    }
}
export const current_moduleSelector = (state) => state.reporting.current_module;
export const current_LangIdSelector = (state) => state.reporting.lang_id;

export default reducer;