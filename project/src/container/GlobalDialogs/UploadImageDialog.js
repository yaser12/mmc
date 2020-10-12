import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import UploadService from "../../services/FileUploadService";

export const useStyles = makeStyles((theme) => ({
    paper: { minWidth: "600px" },
    formControl: {
        margin: 5,
        width: '100%',
        marginTop: 10,
        borderBlockColor: 'red',
    },
    forminput: {
        marginBottom: '33px',
        marginTop: '33px',
        borderColor: theme.globalthem.primary.main,
        color: theme.globalthem.primary.main,
        width: '100%'
    },
    inputlabel: {
        borderColor: theme.globalthem.main + '!important',
        color: theme.globalthem.primary.dark,
        fontSize: '16px!important',
        fontFamily: 'Roboto'
    },
    template_hint: {
        textColor: theme.globalthem.primary.dark,
        float: "left",
        margin: 5,
        marginTop: 10,
        fontWeight: "bold",
    },
    required_hint: {
        textColor: theme.globalthem.primary.dark,
        float: "right",
        margin: 5,
        marginTop: 10,
    },
}));

export default function UploadImageDialog({ open, handleClose, handleSave, dialogTitle }) {
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
    const [fileInfos, setFileInfos] = useState([]);
    useEffect(() => {
        UploadService.getFiles().then((response) => {
            setFileInfos(response.data);
        });
    }, []);
    const selectFile = (event) => {
        setSelectedFiles(event.target.files);
    };
    const upload = () => {
        let currentFile = selectedFiles[0];
        setProgress(0);
        setCurrentFile(currentFile);
        UploadService.upload(currentFile, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
        })
            .then((response) => {
                setMessage(response.data.message);
                return UploadService.getFiles();
            })
            .then((files) => {
                setFileInfos(files.data);
            })
            .catch(() => {
                setProgress(0);
                setMessage("Could not upload the file!");
                setCurrentFile(undefined);
            });
        setSelectedFiles(undefined);
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                {dialogTitle}
            </DialogTitle>
            <DialogActions>
                <div>
                    {currentFile && (
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-info progress-bar-striped"
                                role="progressbar"
                                aria-valuenow={progress}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: progress + "%" }}
                            >
                                {progress}%
                           </div>
                        </div>
                    )}
                    <label className="btn btn-default">
                        <input type="file" onChange={selectFile} />
                    </label>
                    <button
                        className="btn btn-success"
                        disabled={!selectedFiles}
                        onClick={upload}
                    >
                        Upload
                  </button>
                    <div className="alert alert-light" role="alert">
                        {message}
                    </div>

                </div>
            </DialogActions>
        </Dialog>

    );
}
