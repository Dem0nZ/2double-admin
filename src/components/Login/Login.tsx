import React from "react";
import { NavLink } from "react-router-dom";
import {Form} from "react-final-form";
import {TextField} from "mui-rff";
import {Button} from "@material-ui/core";

interface FormData {
    login: string;
}

const onSubmit = (values: FormData) => {
    console.log(values);
}

const Login = () => {

    return ( <div>
            <div>
                <NavLink to={'/admin'}>admin</NavLink>
            </div>
                <Form onSubmit={onSubmit}>
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <TextField label={'login'} name={'login'}/>
                            <TextField label={'password'} name={'password'}/>
                            <Button variant="contained" color="secondary" type="submit">Submit</Button>
                        </form>
                    )}
                </Form>
            </div>
        )
};

export default Login;