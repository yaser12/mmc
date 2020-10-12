import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from "styled-components";
export const StyledButton = styled(Button)`
        color: ${({ theme }) => theme.default.primary.item_background};        
        background-color:  ${({ theme }) => theme.default.primary.main};             
  }
`;

const ConfirmDialog = (props) => {
    const { title, children, open, setOpen, onConfirm } = props;
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="confirm-dialog"
        >
            <DialogTitle id="confirm-dialog">{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <StyledButton
                    variant="contained"
                    onClick={() => setOpen(false)}
                >
                    No
             </StyledButton>
                <StyledButton
                    variant="contained"
                    onClick={() => {
                        setOpen(false);
                        onConfirm();
                    }}
                >
                    Yes
        </StyledButton>
            </DialogActions>
        </Dialog>
    );
};
export default ConfirmDialog;