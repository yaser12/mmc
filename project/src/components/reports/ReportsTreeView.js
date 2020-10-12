import React, { useState } from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import ConfirmDialog from "../../container/GlobalDialogs/ConfirmDialog";
import EditDialog from "../../container/GlobalDialogs/EditDialog";

const usetreeItemStyles = makeStyles(theme => ({

    root: {
        fontSize: '16px',
        color: theme.globalthem.primary.dark,
        fontFamily: 'Roboto',
        "&:hover ": {
            background: theme.globalthem.primary.item_background,
            "& .MuiTreeItem-content": {
                "& .MuiTreeItem-label": {
                    background: 'none!important'
                }
            }
        },
        "&:expanded ": {
            background: theme.globalthem.primary.item_background,
        },
        "&:label ": {
            backgroundColor: theme.globalthem.primary.item_background,
            background: theme.globalthem.primary.item_background,
        }, "&:selected ": {
            backgroundColor: theme.globalthem.primary.item_background,
            background: theme.globalthem.primary.item_background,
        },
        "&:group": {
            background: theme.globalthem.primary.item_background,
        },
        "&:content": {
            backgroundColor: theme.globalthem.primary.item_background,
            background: theme.globalthem.primary.item_background,
        },
        "&:iconContainer": {
            background: theme.globalthem.primary.item_background,
        }
    },
    selected: {
        backgroundColor: theme.globalthem.primary.item_background,
        "& .MuiTreeItem-content": {
            "& .MuiTreeItem-label": {
                background: 'none!important'
            }
        }
    },
    expanded: {},
    label: {},
    group: {},
    content: {},
    iconContainer: {},


}));
const useTreeViewStyles = makeStyles(theme => ({
    tree: {
        height: 240,
        flexGrow: 1,
        maxWidth: 400,
    },
    treetitle: {
        fontSize: '26px',
        fontWeight: 'bold',
        color: theme.globalthem.primary.dark,
        fontFamily: 'Roboto',
    },
    treeitem: {
        fontSize: '16px',
        color: theme.globalthem.primary.dark,
        fontFamily: 'Roboto',
    },
    td_right: {
        textAlign: 'right'
    }
}));

const ReportsTreeView = ({ allBerichte, setSection, setChapter, setTextBlock, setCurentChapterIndex, setCurentSectionIndex, pagechapter, pagesection, startDeleteChapter, startRenameChapter }) => {
    const treeViewClasses = useTreeViewStyles();
    const [updateCount, forceUpdate] = useState(0);

    const treeItemClasses = usetreeItemStyles();
    const [showConfirmDelete, setShowConfirmDelete] = useState(false);
    const [currentChapter2Edit, setCurrentChapter2Edit] = useState({});
    const [clickedChapter, setClickedChapter] = useState(null);
    const [openshowEditDialog, setopenshowEditDialog] = React.useState(false);

    const handleCloseEditDialog = () => {
        setopenshowEditDialog(false);
    }
    const handleSaveEditDialog = (newChapterName) => {
        const newChapter2Edit = JSON.parse(JSON.stringify(currentChapter2Edit));
        newChapter2Edit.lang.value = newChapterName.textValueName;
        startRenameChapter(newChapter2Edit);
        setopenshowEditDialog(false);
        setTimeout(() => { forceUpdate(updateCount + 1); }, 1000);
        setTimeout(() => { forceUpdate(updateCount + 1); }, 1500);
        setTimeout(() => { forceUpdate(updateCount + 1); }, 2000);
    }
    const handleOpenEditDialog = (chapter) => {
        setCurrentChapter2Edit(chapter);
        setopenshowEditDialog(true);
    }
    const handleSectionOpen = (chapter, currentChapterIndex, section, currentSectionIndex) => {
        setSection(section);
        setChapter(chapter);
        setTextBlock("");
        setCurentChapterIndex(currentChapterIndex);
        setCurentSectionIndex(currentSectionIndex);
    };
    const handleDeleteChapter = (chapter) => {
        setClickedChapter(chapter);
        setShowConfirmDelete(true);
    }
    const confirmedDeleteChapter = () => {
        startDeleteChapter(clickedChapter);
    }
    const handleDeleteSection = (section_id) => {

    }
    const treeItemChildLabelFormate = (chapterIndex, sectionIndex, section) => {
        return (parseInt(chapterIndex) + 1) + '. ' + (parseInt(sectionIndex) + 1) + ' ' + section.lang.value;
    }
    const treeItemChildNodeIdFormate = (chapterIndex, sectionIndex) => {
        return ((parseInt(chapterIndex) + 1)) + '.' + (parseInt(sectionIndex) + 1);
    }
    const treeItemParentKeyFormate = (chapterIndex, sectionIndex) => {
        return (parseInt(chapterIndex) + 1) + (parseInt(sectionIndex) + 1);
    }
    const treeItemParentLabelFormate = (chapterIndex, chapter) => {
        return ((parseInt(chapterIndex) + 1)) + '. ' + chapter.lang.value;
    }
    const treeItemParentNodeIdFormate = (chapterIndex) => {
        return (parseInt(chapterIndex) + 1);
    }
    const isThereReports = () => {
        if (allBerichte) { return true; }
        else {
            return false;
        }
    }
    const isThereSections = (currentChapter) => {
        if (
            currentChapter
            &&
            currentChapter.sections
        ) {
            return true;
        }
        else {
            return false;
        }
    }
    return <>
        <ConfirmDialog
            title={clickedChapter && clickedChapter.lang && "Delete  " + clickedChapter.lang.value + "?"}
            open={showConfirmDelete}
            setOpen={setShowConfirmDelete}
            onConfirm={confirmedDeleteChapter}
        >  Are you sure you want to delete this Chapter?
        </ConfirmDialog>
        <EditDialog
            open={openshowEditDialog}
            handleClose={handleCloseEditDialog}
            handleSave={handleSaveEditDialog}
            dialogTitle={"edit chapter"}
            TextFieldLabel={"chapter name"}
            TextFieldValue={pagechapter && pagechapter.lang && pagechapter.lang.value}
        />

        <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
        >
            {isThereReports() &&
                allBerichte.map(
                    (chapter, chapterIndex) => (
                        <TreeItem nodeId={treeItemParentNodeIdFormate(chapterIndex)} key={chapterIndex}
                            label={
                                <table width="100%">
                                    <tr>
                                        <td colSpan="2">
                                            {treeItemParentLabelFormate(chapterIndex, chapter)}
                                        </td>
                                        <td className={treeViewClasses.td_right}>
                                            <Button onClick={(event) => {
                                                handleOpenEditDialog(chapter);
                                            }} >
                                                <EditIcon />
                                            </Button>
                                            <Button >
                                                <div>
                                                    <IconButton aria-label="delete"
                                                        onClick={(event) => handleDeleteChapter(chapter)}>
                                                        <DeleteForeverIcon />
                                                    </IconButton>
                                                </div>
                                            </Button>
                                            <Button >
                                                <AddIcon />
                                            </Button>
                                        </td>
                                    </tr>
                                </table>
                            } className={treeViewClasses.treeitem}  >
                            {isThereSections(chapter) &&
                                chapter.sections.map(
                                    (section, sectionIndex) => (
                                        <TreeItem
                                            nodeId={treeItemChildNodeIdFormate(chapterIndex, sectionIndex)}
                                            key={treeItemParentKeyFormate(chapterIndex, sectionIndex)}
                                            onClick={(event) => handleSectionOpen(chapter, chapterIndex, section, sectionIndex)}
                                            label={
                                                <table width="100%">
                                                    <tr>
                                                        <td colSpan="2">   {treeItemChildLabelFormate(chapterIndex, sectionIndex, section)}</td>
                                                        <td className={treeViewClasses.td_right}>
                                                            <Button >
                                                                <EditIcon />
                                                            </Button>


                                                            <Button >
                                                                <DeleteForeverIcon />
                                                            </Button>

                                                            <Button >
                                                                <AddIcon /></Button> </td>
                                                    </tr>
                                                </table>

                                            }
                                            classes={treeItemClasses} />
                                    )
                                )
                            }
                        </TreeItem>
                    )
                )
            }
        </TreeView>

    </>;
}

export default ReportsTreeView
