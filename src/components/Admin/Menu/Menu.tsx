import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, CircularProgress, Paper, TextField} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import AddCategoryDialog from "./Categories/AddCategoryDialog";
import useTypedSelector from "../../../hooks/myHooks";
import {useDispatch} from "react-redux";
import {getCategoriesList, deleteCategory} from "../../../store/menu/thunks";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    paper: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px',
        marginTop: '5px'
    }
});

const Menu = () => {

    const isFetching = useTypedSelector(state => state.menu.isFetching);
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(getCategoriesList())}, [dispatch]);
    const categories = useTypedSelector(state => state.menu.categories)
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (value: boolean) => {
        setOpen(false);
    };

    const [edit, setEdit] = React.useState(false);
    const editModeOn = () => {
        setEdit(true);
    }
    const editModeOff =() => {
        setEdit(false);
    }

    const deleteCategoryButton = (id: number) => {
        dispatch(deleteCategory(id))
    }
    return (<div className={classes.container}>
            <Button variant='contained'
                    color='primary'
                    startIcon={<Add/>}
                    onClick={handleClickOpen}>
                Добавить категорию
            </Button>
                { isFetching ? <CircularProgress color='secondary'/> : null }
                { categories && categories.map(category =>
                    <Paper classes={{root:classes.paper}}>
                        {/*TODO: tut pizda*/}
                        {edit? <TextField onClick={editModeOff}>{category.name}</TextField> : <span onClick={editModeOn}>{category.name}</span>}
                        <div>
                            <Button variant='contained'
                            color='primary'>
                                Добавить блюдо
                            </Button>
                            <Button variant='contained'
                                    color='secondary'
                                    onClick={() =>{deleteCategoryButton(category.id)}}
                            startIcon={<DeleteIcon/>}>
                            </Button>


                        </div>
                    </Paper>)}
            <AddCategoryDialog open={open} onClose={handleClose}/>
        </div>
    )
}

export default Menu;