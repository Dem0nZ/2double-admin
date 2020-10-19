import React from 'react';
import { Dialog } from "@material-ui/core";

export interface DialogProps {
    isOpen: boolean
    id?: number|undefined
    onClose: (value:string)=> void
}


const EditDialog = ({ id,isOpen, onClose }: DialogProps)=> {
    return (
        <Dialog open={ isOpen } onClose={onClose}>
            {
                id === undefined ? (<p>Это новый ресторан</p>) : (<p>Этот ресторан под номером: {id}</p>)
            }
        </Dialog>
    )
}

export default EditDialog;