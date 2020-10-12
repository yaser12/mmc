import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as reportingActions from '../../store/actions/reportingActions';
import TextblockPage from '../../page/TextblockPage/TextblockPage';

const TextblockPageContainer = () => {
    const currentModule = useSelector(state => state.reporting.current_module);
    const current_LangIdSelector = useSelector(state => state.reporting.lang_id);
    const [updateCount, forceUpdate] = useState(0);
    const dispatch = useDispatch();
    //#region handle textmodule autocomplete
    const handleTextModuleChange = (event, chosen_module) => {
        if (chosen_module !== null) {
            dispatch(reportingActions.setCurrentModule(chosen_module));
            dispatch(reportingActions.getAllBerichte());
        }
    };
    const addTextBlockToCurrentSection = (chapter, section, textBlock) => {
        dispatch(reportingActions.addTextBlockToSection(chapter, section, textBlock));
    };
    const removeTextBlockFromCurrentSection = (chapter, section, textBlockId) => {
        const textblocksToRemove = section.textblocks.filter(textblock => textblock.id === textBlockId);
        dispatch(reportingActions.removeTextBlockFromSection(chapter, section, textblocksToRemove[0]));
    };
    const saveTextBlockToCurrentSection = (chapter, section, textBlock) => {
        dispatch(reportingActions.saveTextBlockFromSection(chapter, section, textBlock));
    };
    useEffect(() => {
        dispatch(reportingActions.getAllModules(current_LangIdSelector));
        forceUpdate(updateCount + 1);
    }, []);
    const setSelectedModule = (current_module) => {
        dispatch(reportingActions.setCurrentModule(current_module));
    };
    return (
        <TextblockPage
            handleTextModuleChange={handleTextModuleChange}
            addTextBlockToCurrentSection={addTextBlockToCurrentSection}
            removeTextBlockFromCurrentSection={removeTextBlockFromCurrentSection}
            saveTextBlockToCurrentSection={saveTextBlockToCurrentSection}
        />
    );
}
export default TextblockPageContainer
