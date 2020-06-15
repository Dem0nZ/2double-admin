import React from "react";
import {NavLink} from "react-router-dom";
const Admin = () => {
    return ( <div>
            <div>
                <NavLink to={'/login'}>login</NavLink>
            </div>
        </div>
    )
};

export default Admin;