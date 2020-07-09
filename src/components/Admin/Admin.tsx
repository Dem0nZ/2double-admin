import React from 'react';
import { Container } from '@material-ui/core';
import {withAuthRedirect} from "../../containers/adminRoute";

const Admin = () => {
    return (
        <Container maxWidth="sm">
            <h1>Here is admin panel!</h1>
        </Container>
    );
};

let AdminWithRedirect = withAuthRedirect({ component: Admin });

export default AdminWithRedirect;