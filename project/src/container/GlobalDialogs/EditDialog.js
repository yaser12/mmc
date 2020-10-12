import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Field } from 'formik';
import Dialog from "@material-ui/core/Dialog";
import TextField from '@material-ui/core/TextField';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { useTranslation } from 'react-i18next';

import OutlinedInput from '@material-ui/core/OutlinedInput';
const useBorderInputStyles = makeStyles(theme => ({
    root: {
        "& $notchedOutline": {
            borderColor: theme.globalthem.primary.dark,
            color: theme.globalthem.primary.main,
            fontSize: '16px',
            fontFamily: 'Roboto',
        },
        "&:hover $notchedOutline": {
            borderColor: "black",
            color: theme.globalthem.primary.main,
            fontSize: '16px',
        },
        "&$focused $notchedOutline": {
            borderColor: theme.globalthem.primary.main,
            color: theme.globalthem.primary.main,
            fontSize: '16px',
        }
    },
    focused: {},
    notchedOutline: {}
}));


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

export default function EditDialog({ open, handleClose, handleSave, dialogTitle, TextFieldLabel, TextFieldValue }) {
    const classes = useStyles();
    const borderclasses = useBorderInputStyles();
    const { t } = useTranslation("words");

    return (
        <Formik
            initialValues={{
                textValueName: TextFieldValue,
            }}
            validationSchema={Yup.object().shape({
                textValueName: Yup.string()
                    .required(TextFieldLabel + ' is required').nullable()
            })}
            onSubmit={(fields, { setSubmitting, resetForm }) => {
                handleClose();
                handleSave(fields);
                resetForm({
                    textValueName: '',
                });

            }}
            render={({ submitForm, handleChange, handleBlur, errors, status, touched }) => (
                <Form>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="form-dialog-title"
                        classes={{ paper: classes.paper }}
                    >
                        <DialogTitle id="form-dialog-title">
                            {dialogTitle}
                        </DialogTitle>
                        <DialogContent>
                            <FormControl className={classes.forminput} variant="outlined" >

                                <TextField
                                    classes={borderclasses}
                                    label={TextFieldLabel}
                                    name="textValueName"
                                    type="text"
                                    variant="outlined"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={(errors.textValueName && touched.textValueName) && errors.textValueName}
                                    margin="normal"
                                />
                            </FormControl>
                            <div>
                                <p className={classes.template_hint}> </p>
                                <p className={classes.required_hint}> </p>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                cancel
                            </Button>

                            <Button type="submit" color="primary" onClick={submitForm} >
                                ok
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Form>
            )}
        />
    );
}
