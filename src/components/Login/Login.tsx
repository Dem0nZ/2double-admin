import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import {Form} from "react-final-form";
import {TextField} from "mui-rff";
import {Button, Container} from "@material-ui/core";
import {useSelector} from "react-redux";
import {authAPI} from "../../api/api";

interface FormData {
    login: string;
    password: string
}
interface RootState {
    login: {
        isAuth: boolean
    }

}

const onSubmit = (values: FormData) => {
    authAPI.login(values.login, values.password)
}

const Login = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.login.isAuth)

    if (isAuth) {
        return <Redirect to={'/admin'} />
    }

    return ( <Container maxWidth="sm">
                <Form onSubmit={onSubmit}>
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <TextField color="secondary" label={'login'} name={'login'} required={true}/>
                            <TextField  color="secondary" type={"password"} label={'password'} name={'password'} required={true}/>
                            <Button variant="contained" color="secondary" type="submit">Submit</Button>
                        </form>
                    )}
                </Form>
        </Container>
        )
};

export default Login;