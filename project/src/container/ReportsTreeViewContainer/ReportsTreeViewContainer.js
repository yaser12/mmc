import React, { useState } from 'react';
import ReportsTreeView from '../../components/reports/ReportsTreeView';
import { useDispatch } from 'react-redux';
import * as reportingActions from '../../store/actions/reportingActions';

const ReportsTreeViewContainer = ({ allBerichte, setSection, setChapter, setTextBlock, setCurentChapterIndex, setCurentSectionIndex, pagechapter, pagesection, startDeleteChapter, startRenameChapter }) => {
    const dispatch = useDispatch();
    const [updateCount, forceUpdate] = useState(0);

    const dipatchStartDeleteChapter = (chapter) => {
        dispatch(reportingActions.deleteCustomChapterFromModule(chapter));
    }
    const dispatchStartRenameChapter = (chapter) => {

        dispatch(reportingActions.renamCustomChapter(chapter));
        forceUpdate(updateCount + 1);

    }
    return <>
        <ReportsTreeView
            allBerichte={allBerichte}
            setSection={setSection}
            setChapter={setChapter}
            setTextBlock={setTextBlock}
            setCurentChapterIndex={setCurentChapterIndex}
            setCurentSectionIndex={setCurentSectionIndex}
            pagechapter={pagechapter}
            pagesection={pagesection}
            startDeleteChapter={dipatchStartDeleteChapter}
            startRenameChapter={dispatchStartRenameChapter}
        />
    </>;
}

export default ReportsTreeViewContainer