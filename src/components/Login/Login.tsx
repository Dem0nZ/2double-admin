import React from 'react';
import {Redirect} from 'react-router-dom';
import {Form} from 'react-final-form';
import {TextField} from 'mui-rff';
import {Button, Container} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/login/thunks';

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

    const onSubmit = (values: FormData) => {
        dispatch(login(values.login, values.password));
    };

    if (isAuth) {
        return (<Redirect to='/admin/menu'/>);
    }
    return (
        <Container maxWidth='sm'>
            <Form onSubmit={onSubmit}
                  validate={values => {
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
                {props => (
                    <form onSubmit={props.handleSubmit} noValidate>
                        <TextField autoFocus={true} color='secondary' label='login' name='login' required/>
                        <TextField color='secondary' type='password' label='password' name='password' required/>
                        <Button variant='contained' color='secondary' type='submit'>Submit</Button>
                    </form>
                )}
            </Form>
        </Container>
    );
};

export default Login;