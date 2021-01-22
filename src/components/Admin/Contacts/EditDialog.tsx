import React, {useEffect} from 'react';
import {Button, CircularProgress, Dialog, Grid, makeStyles, createStyles, Theme} from "@material-ui/core";
import {Form} from 'react-final-form';
import {TextField} from "mui-rff";
import useTypedSelector from "../../../hooks/myHooks";
import {useDispatch} from "react-redux";
import {createCafe, editCafe, getCafe, getCafeList} from "../../../store/contacts/thunks";
import {getNewCafe} from "../../../store/contacts/actions";
import {RestaurantData} from "../../../models";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export interface DialogProps {
    isOpen: boolean
    id: number | undefined
    onClose: () => void
}

const EditDialog = ({id, isOpen, onClose}: DialogProps) => {


    const isFetching = useTypedSelector(state => state.contacts.edit?.isFetching);
    const dispatch = useDispatch();

    const onSubmit = (values: RestaurantData) => {
        let rest = {
            name: values.name,
            address: values.address,
            schedule: values.schedule,
            phone: values.phone,
            lat: values.lat,
            lon: values.lon,
        }

        if (id !== undefined) {
            dispatch(editCafe(id, rest));
        } else {
            dispatch(createCafe(rest));
        }

        dispatch(getCafeList());
        onClose();

    }

    useEffect(() => {
        if (id !== undefined) {
            dispatch(getCafe(id));
        } else {
            getNewCafe();
        }
    }, [dispatch, id]);
    const restaurant = useTypedSelector(state => state.contacts.edit?.restaurant);

    const classes = useStyles();




    return (
        <Dialog open={isOpen} onClose={onClose}>
            {isFetching ? <CircularProgress color='secondary'/> :
                <Form onSubmit={onSubmit}
                      initialValues={restaurant}>
                    {props => (<>
                            {props.submitting ? <CircularProgress color='secondary'/> :
                                <form onSubmit={props.handleSubmit} noValidate>
                                    <div className={classes.root}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={2}>
                                                <h1>{id}</h1>
                                            </Grid>
                                            <Grid item xs={10}>
                                                <TextField autoFocus={true} color='secondary' label='Адрес Ресторана'
                                                           name='address' required/>
                                            </Grid>
                                            <Grid container item xs={6}>
                                                <Grid item xs={12}>
                                                    <TextField color='secondary' label='Название ресторана'
                                                               name='name' required/>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField color='secondary' label='Время работы'
                                                               name='schedule' required/>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField color='secondary' label='Телефон'
                                                               name='phone' required/>
                                                </Grid>
                                            </Grid>
                                            <Grid id='map' item xs={6}>
                                                <Grid item xs={12}>
                                                   <h2>Координаты ресторана:</h2>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField color='secondary' label='Широта'
                                                               name='lat' required/>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField color='secondary' label='Долгота'
                                                               name='lon' required/>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant='contained' color='secondary'
                                                        disabled={props.submitting}
                                                        type="button"
                                                        onClick={onClose}
                                                >Отменить</Button>
                                                <Button variant='contained' color='secondary'
                                                        type='submit' disabled={props.submitting}
                                                >Сохранить</Button>
                                            </Grid>
                                        </Grid>
                                    </div>

                                </form>}
                        </>
                    )}
                </Form>}

        </Dialog>
    )
}

export default EditDialog;