import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';
import { Button, Container, CircularProgress, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/login/thunks';


const useStyles = makeStyles({
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

interface FormData {
    login: string
    password: string
}

interface RootState {
    login: {
        isAuth: boolean
    }
}

const Login = () => {
    const isAuth = useSelector((state: RootState) => state.login.isAuth);
    const dispatch = useDispatch();

    const classes = useStyles();

    const onSubmit = (values: FormData) => {
        return dispatch(login(values.login, values.password));
    };

    if (isAuth) {
        return (<Redirect to='/admin'/>);
    }
    return (
        <Container maxWidth='sm' className={ classes.container }>
            <Form onSubmit={ onSubmit }
                  validate={ values => {
                      const errors: Partial<FormData> = {};
                      if (!values.login) {
                          errors.login = 'Заполните поле';
                      }
                      if (!values.password) {
                          errors.password = 'Заполните поле';
                      }
                      return errors;
                  }}
            >
                { props => ( <>
                        { props.submitting ? <CircularProgress color='secondary'/> :
                    <form onSubmit={ props.handleSubmit } noValidate >
                        <TextField autoFocus={ true } color='secondary' label='login' name='login' required/>
                        <TextField color='secondary' type='password' label='password' name='password' required/>
                        <Button variant='contained' color='secondary' type='submit' disabled={ props.submitting }>Submit</Button>
                    </form> }
                    </>
                )}
            </Form>
        </Container>
    );
};

export default Login;