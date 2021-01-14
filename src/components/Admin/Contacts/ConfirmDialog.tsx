import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {Button, DialogActions} from "@material-ui/core";
import {deleteCafe} from "../../../store/contacts/thunks";
import {useDispatch} from "react-redux";

export interface ConfirmDialogProps {
    open: boolean;
    onClose: (value: boolean) => void;
    id: number;
}

function ConfirmDialog(props: ConfirmDialogProps) {
    const { onClose, open, id } = props;
    const handleClose = () => {
        onClose(false);
    };
    const dispatch = useDispatch();

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Вы точно хотите удалить этот элемент?</DialogTitle>
            <DialogActions>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={() => {
                        dispatch(deleteCafe(id));
                        handleClose();
                    }}
                >Удалить</Button>
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={handleClose}
                >Отмена</Button>
            </DialogActions>

        </Dialog>
    );
}
export default ConfirmDialog;