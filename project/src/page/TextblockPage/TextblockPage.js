import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import {
    Typography,
    Card,
    CardContent,
    Button
} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { useSelector } from 'react-redux';
import ReportsTreeViewContainer from '../../container/ReportsTreeViewContainer/ReportsTreeViewContainer';
import UploadImageDialog from "../../container/GlobalDialogs/UploadImageDialog";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    mainGrid: {
        height: "100%",
        maxHeight: 750,
    },
    td_titletreeview: {
        'white-space': 'nowrap'
    },
    moduleGrid: {

        display: "flex",
        justifyContent: "flex-end"

    },
    paper: {
        textAlign: "center",
        height: "100%",
    },
    textModulesTitle: {
        marginLeft: 10,
        fontWeight: "bold",
        fontSize: "24px",
        color: theme.globalthem.primary.dark,
        fontFamily: "Roboto",
        height: "32px",
        textAlign: "left",
    },
    textModulesAutocCompleteGrid: {
        padding: theme.spacing(1),
        width: 600,
    },
    // reportEditorStyle: {
    //   zIndex: 0,
    // },
    reportEditorStyle: {
        height: "100%",
        width: "100%",
    },
    borderStyle: {
        borderStyle: "dashed",
        // height: 100,
        color: theme.globalthem.primary.dark,
        height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 6,
        // zIndex: 1,
        // position: "relative",
        // marginTop: -120,
        // marginRight: 5,
        // marginLeft: 5,
    },
    addTextblockButton: {
        // marginTop: -125,
        // zIndex: 3,

        alignSelf: 'flex-end',
        marginTop: -90,
        marginRight: 20,

        backgroundColor: theme.globalthem.primary.dark,
        color: theme.globalthem.primary.main,
        opacity: 0.5,
        "&:hover": {
            backgroundColor: theme.globalthem.primary.dark,
            opacity: 1,
        },
    },
    editorProgressBar: {
        alignSelf: 'center',
        justifySelf: 'center',
        color: theme.globalthem.primary.main,
    },
    progressColorPrimary: {
        backgroundColor: 'white',
    },
    progressBarColorPrimary: {
        backgroundColor: theme.globalthem.primary.main,
    }
}));

const useTextblockStyles = makeStyles(theme => ({
    textareaAutosize: {
        border: 'none',
        height: '100% !important',
        width: '100%',
        boxShadow: 'none',
    },
    titlerighttop: {
        paddingRight: '34px',
    },
    iconButton: {
        backgroundColor: theme.globalthem.primary.main,
        width: '86px',
        height: '42px',
    },
    card: {
        height: '70px',
        boxShadow: 'none',

    },
    cardtile: {
        fontWeight: 'bold',
        fontSize: '24px',
        color: theme.globalthem.primary.dark,
        fontFamily: 'Roboto',
        height: '32px',
    },
    item_right_top: {
        paddingRight: '60px',

        "&:hover": {
            backgroundColor: theme.globalthem.primary.item_background,
        },
        "&:focus": {
            backgroundColor: theme.globalthem.primary.item_background,
        }
    }
    ,
    navigateNextIcon: {
        fontSize: '18px',
        verticalAlign: 'middle',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    container: {
        width: '100%',
    },
    leftbox: {
        float: 'left',
        background: '#ffffff',
        width: '22%',
        height: '100%',
    },
    rightbox: {
        float: 'right',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    righ_down_tbox: {
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        borderRadius: 'unset',
        height: '43%',
    },
    righ_top_tbox: {
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        borderRadius: 'unset',
        height: '55%',
        'overflow-y': 'auto'
    },
    divider_righ_top_down_tbox: {
        height: '2%',
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    box_grid: {
        boxShadow: 'none',
        height: '100%',
        width: '75%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cbcccc',
    },
    root: {
        height: '50vh',
    },
    main: {
        height: '700px',
    },
    conntainer_grid:
    {
        backgroundColor: '#ffffff',
        margin: '14px 10px 10px 10px',

    },
    conntainer_grid_tree_view: {

        backgroundColor: '#ffffff',
        margin: '14px 10px 10px 10px',
        overflow: 'auto',
        height: '640px'
    },
    parent_conntainer_grid:
    {
        backgroundColor: '#cbcccc',

    },

    treetitle: {
        fontSize: '26px',
        fontWeight: 'bold',
        color: theme.globalthem.primary.dark,
        fontFamily: 'Roboto',
    }
}));

const TextblockPage = ({ handleTextModuleChange, addTextBlockToCurrentSection, removeTextBlockFromCurrentSection, saveTextBlockToCurrentSection }) => {
    const classes = useStyles();
    const [chapter, setChapter] = useState("");
    const [section, setSection] = useState("");
    const [curentChapterIndex, setCurentChapterIndex] = useState();
    const [curentSectionIndex, setCurentSectionIndex] = useState();
    const [currenttextblockIndex, setCurentTextblockIndex] = useState();
    const [openshowUploadImageDialog, setopenUploadImageDialog] = React.useState(false);
    const [updateCount, forceUpdate] = useState(0);
    const [textBlock, setTextBlock] = useState("");
    const handleCloseUploadImageDialog = () => {
        setopenUploadImageDialog(false);
    }
    const handleOpenUploadImageDialog = () => {
        setopenUploadImageDialog(true);
    }
    //#region handle textmodule autocomplete

    useEffect(() => {
        try {
            section &&
                section.textblocks &&
                section.textblocks.map(
                    (textblock, textblock_index) => (
                        document.getElementById('textblock_index' + textblock_index).style.backgroundColor = 'white'
                    ));
            document.getElementById('textblock_index' + currenttextblockIndex).style.backgroundColor = '#DDDDDD';
        } catch (e) { }
    }, [updateCount])

    const textblockClasses = useTextblockStyles();
    const { t } = useTranslation("words");
    const allBerichte = useSelector(state => state.reporting.allBerichte);
    const allModules = useSelector(state => state.reporting.modules);
    const currentModule = useSelector(state => state.reporting.current_module);

    const handleTextBlockShow = (currenttextBlock, currenttextblock_index) => {
        section &&
            section.textblocks &&
            section.textblocks.map(
                (textblock, textblock_index) => (
                    document.getElementById('textblock_index' + textblock_index).style.backgroundColor = 'white'
                ));
        document.getElementById('textblock_index' + currenttextblock_index).style.backgroundColor = '#DDDDDD';
        setTextBlock(section.textblocks[currenttextblock_index]);
        setCurentTextblockIndex(currenttextblock_index);
        forceUpdate(updateCount + 1);
    };

    const handleAddTextBlockToCurrentSection = () => {
        if (section) {
            const newtextBlock = { 'id': (parseInt(section.textblocks[section.textblocks.length - 1].id) + 1), 'text': 'blink  text' };
            if (newtextBlock) {
                addTextBlockToCurrentSection(chapter, section, newtextBlock);
                setTextBlock(section.textblocks[section.textblocks.length - 1]);
                setCurentTextblockIndex(section.textblocks.length - 1);
                forceUpdate(updateCount + 1);
            }
        }

    };

    const handleRemoveTextBlockFromCurrentSection = (textBlockId) => {
        if (textBlock && section) {
            removeTextBlockFromCurrentSection(chapter, section, textBlockId);
            forceUpdate(updateCount + 1);
        }
    };
    const handlesaveTextBlockToCurrentSection = () => {
        if (textBlock && section) {
            saveTextBlockToCurrentSection(chapter, section, textBlock);
            forceUpdate(updateCount + 1);
            section &&
                section.textblocks &&
                section.textblocks.map(
                    (textblock, textblock_index) => (
                        document.getElementById('textblock_index' + textblock_index).style.backgroundColor = 'white'
                    ));
            document.getElementById('textblock_index' + currenttextblockIndex).style.backgroundColor = '#DDDDDD';
        }
        forceUpdate(updateCount + 1);
    };
    const handleTextAreaOnChange = (event) => {
        const newtextBlock = { 'id': textBlock.id, 'lang': { 'id': 1, 'value': event.target.value } };
        setTextBlock(newtextBlock);
        forceUpdate(updateCount + 1);
    };

    return (
        <>
            <UploadImageDialog
                open={openshowUploadImageDialog}
                handleClose={handleCloseUploadImageDialog}
                handleSave={handleCloseUploadImageDialog}
                dialogTitle={"edit chapter"}
                TextFieldLabel={"chapter name"}
            />

            <Grid container className={textblockClasses.parent_conntainer_grid}  >
                <Grid container className={textblockClasses.conntainer_grid}  >
                    <Grid item xs={12} sm={12} md={12} lg={12} component={Paper} elevation={6} square className={textblockClasses.box_grid}  >
                        <Grid item xs={false} sm={4} md={4} lg={4} component={Paper} elevation={6} square className={textblockClasses.leftbox} >
                            <Grid item xs={false} sm={12} md={12}   >
                                <Grid className={textblockClasses.conntainer_grid_tree_view}  >
                                    <div
                                        className={textblockClasses.treetitle}
                                    >
                                        <table>
                                            <tr>
                                                <td colSpan={2} className={classes.td_titletreeview}>
                                                    {t("Text Blocks")}
                                                </td>
                                                <td >

                                                    <Grid className={classes.moduleGrid}
                                                        item
                                                        xs={6}

                                                        alignItems="center"
                                                    >
                                                        <Autocomplete
                                                            className={classes.textModulesAutocCompleteGrid}
                                                            id="combo-box-module"
                                                            options={allModules}
                                                            getOptionLabel={(option) => option.lang.value}
                                                            renderInput={(params) => (
                                                                <TextField {...params} label={currentModule && currentModule.id ? currentModule.lang.value : " select module"} variant="outlined" />
                                                            )}
                                                            onChange={handleTextModuleChange}
                                                        />
                                                    </Grid>

                                                </td>
                                            </tr>

                                        </table>
                                    </div>
                                    <ReportsTreeViewContainer
                                        allBerichte={allBerichte}
                                        setSection={setSection}
                                        setChapter={setChapter}
                                        setTextBlock={setTextBlock}
                                        setCurentChapterIndex={setCurentChapterIndex}
                                        setCurentSectionIndex={setCurentSectionIndex}
                                        pagechapter={chapter}
                                        pagesection={section}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid  >  &nbsp;  &nbsp; </Grid>
                        <Grid item xs={8} sm={8} md={8} lg={8} component={Paper} elevation={6} square className={textblockClasses.rightbox}  >
                            <Grid item
                                component={Paper} elevation={6} square
                                className={textblockClasses.righ_top_tbox}
                            >
                                <Card className={textblockClasses.card}>
                                    <Grid item xs={2} sm={2} md={2} lg={2} className={textblockClasses.rightbox}  >
                                        <AccordionSummary className={textblockClasses.titlerighttop}
                                            expandIcon={<Button className={textblockClasses.iconButton} onClick={(event) => handleAddTextBlockToCurrentSection()} >
                                                <AddIcon /></Button>}
                                            aria-controls="additional-actions1-content"
                                            id="additional-actions1-header"
                                        >  </AccordionSummary>  </Grid>
                                    <Grid item xs={10} sm={10} md={10} lg={10} className={textblockClasses.rightbox}  >
                                        <CardContent>
                                            <Typography className={textblockClasses.cardtile}  >
                                                {t("text_modules")}
                                            </Typography>
                                            <Typography className={textblockClasses.pos} color="textSecondary">
                                                {chapter && chapter.lang.value}
                                                {chapter ? <NavigateNextIcon className={textblockClasses.navigateNextIcon} /> : <></>}
                                                {section && section.lang.value}
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                </Card>
                                <Divider />
                                {
                                    allBerichte[curentChapterIndex] &&
                                    allBerichte[curentChapterIndex].sections[curentSectionIndex] &&
                                    allBerichte[curentChapterIndex].sections[curentSectionIndex].textblocks &&
                                    allBerichte[curentChapterIndex].sections[curentSectionIndex].textblocks.map( // 
                                        (textblock, textblock_index) => (
                                            <>
                                                <AccordionSummary key={textblock_index} className={textblockClasses.item_right_top}
                                                    expandIcon={<DeleteIcon onClick={(event) => handleRemoveTextBlockFromCurrentSection(textblock.id)} />}
                                                    aria-controls="additional-actions1-content"
                                                    id={`${'textblock_index' + textblock_index}`}
                                                    onClick={(event) => handleTextBlockShow(textblock, textblock_index)}
                                                >
                                                    <div >{textblock.lang.value}</div>
                                                </AccordionSummary>
                                                <Divider />
                                            </>
                                        ))}
                                {
                                    allBerichte[curentChapterIndex] &&
                                    allBerichte[curentChapterIndex].sections[curentSectionIndex] &&
                                    allBerichte[curentChapterIndex].sections[curentSectionIndex].custom_textblocks &&
                                    allBerichte[curentChapterIndex].sections[curentSectionIndex].custom_textblocks.map( // 
                                        (custom_textblocks, custom_textblocks_index) => (
                                            <>
                                                <AccordionSummary key={custom_textblocks_index} className={textblockClasses.item_right_top}
                                                    expandIcon={<DeleteIcon onClick={(event) => handleRemoveTextBlockFromCurrentSection(custom_textblocks.id)} />}
                                                    aria-controls="additional-actions1-content"
                                                    id={`${'custom_textblocks_index' + custom_textblocks_index}`}
                                                    onClick={(event) => handleTextBlockShow(custom_textblocks, custom_textblocks_index)}
                                                >
                                                    <div >{custom_textblocks.lang.value}</div>
                                                </AccordionSummary>
                                                <Divider />
                                            </>
                                        ))}
                            </Grid>
                            <Divider className={textblockClasses.divider_righ_top_down_tbox} />
                            <Grid
                                component={Paper} elevation={6}
                                className={textblockClasses.righ_down_tbox}
                                height="100%"
                            >
                                <Card className={textblockClasses.card}>
                                    <Grid item xs={2} sm={2} md={2} lg={2} className={textblockClasses.rightbox}  >
                                        <AccordionSummary className={textblockClasses.titlerighttop}
                                            expandIcon={<Button
                                                className={textblockClasses.iconButton}
                                                onClick={(event) => handleOpenUploadImageDialog(event)}
                                            ><SystemUpdateAltIcon /></Button>}
                                            aria-controls="additional-actions1-content"
                                            id="additional-actions1-header"
                                        >  </AccordionSummary>
                                    </Grid>
                                    <Grid item xs={10} sm={10} md={10} lg={10} className={textblockClasses.rightbox}  >
                                        <TextareaAutosize className={textblockClasses.textareaAutosize}
                                            placeholder={t("type_here")}
                                            onChange={(event) => handleTextAreaOnChange(event)}
                                            value={(textBlock && textBlock.lang.value) || ''}
                                        />
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >

        </>);
}
export default TextblockPage
