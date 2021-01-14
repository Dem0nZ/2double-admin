import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getCafeList} from "../../../store/contacts/thunks";
import useTypedSelector from "../../../hooks/myHooks";
import {makeStyles} from "@material-ui/core/styles";
import EditDialog from "./EditDialog";
import ContactCard from "./ContactCard";
import NewItemCard from "../shared/NewItemCard";
import {CircularProgress} from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    }
})

const Contacts = () => {
    const isFetching = useTypedSelector(state => state.contacts.isFetching);
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(getCafeList())}, [dispatch]);
    const restaurants = useTypedSelector(state => state.contacts.restaurants);
    const classes = useStyles();
    let [dialogId, setDialogId] = useState<number|undefined>(undefined);
    let [openDialog, setOpenDialog] = useState<boolean>(false);

    const editDialog = (id: number|undefined) => {
        setDialogId(id);
        setOpenDialog(true);
    }
    const onCloseDialog =() => {
        setOpenDialog(false);
    }
    const editNewRestaurantDialog = () => {
        setDialogId(undefined);
        setOpenDialog(true);
    }

    return (<div className={classes.container}>
            { isFetching ? <CircularProgress color='secondary'/> : null }
            { restaurants && restaurants.map(restaurant =>
                <ContactCard id={restaurant.id} name={restaurant.name} address={restaurant.address} editDialog={(id) => editDialog(id)}/>
            ) }
            <NewItemCard id={undefined} newItemName={'Добавить новый адресс'} editDialog={() => editNewRestaurantDialog()}/>
            <EditDialog id={dialogId} isOpen={openDialog} onClose={onCloseDialog}/>
        </div>
    )
}

export default Contacts;