import React, { ComponentType } from 'react';
import { Container } from '@material-ui/core';
import Navigation from '../components/Admin/Navigation';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        }
    }));

interface RootState {
    login: {
        isAuth: boolean
    }
}

interface RedirectArgs {
    component: ComponentType
}

const Admin = ({component: Component, ...props}: RedirectArgs) => {
    const isAuth = useSelector((state: RootState) => state.login.isAuth);
    const classes = useStyles();
    if (!isAuth) return <Redirect to='/login'/>
    return (
        <Container maxWidth='sm'>
            <Navigation/>
            <main className={ classes.content }>
                <div className={ classes.toolbar }/>
                <Component { ...props }/>
            </main>
        </Container>
    );
};

export default Admin;