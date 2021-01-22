import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {Button, DialogActions, TextField} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    dialog: {
        padding: '10px'
    }
})

export interface AddCategoryProps {
    open: boolean;
    onClose: (value: boolean) => void;
}

function AddCategoryDialog(props: AddCategoryProps) {
    const { onClose, open } = props;
    const handleClose = () => {
        onClose(false);
    };
    const classes = useStyles();
    return (
        <Dialog classes={{paper: classes.dialog}} onClose={handleClose} open={open}>
            <TextField ></TextField>
            <DialogActions>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={handleClose}
                >Добавить категорию</Button>
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={handleClose}
                >Отмена</Button>
            </DialogActions>

        </Dialog>
    );
}
export default AddCategoryDialog;