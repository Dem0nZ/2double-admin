import React, { ComponentType } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../store';

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.login.isAuth
});

interface RedirectComponentProps {
    isAuth: boolean
}

interface RedirectArgs {
    component: ComponentType
}

export const withAuthRedirect = ({ component: Component }: RedirectArgs ) => {
    class RedirectComponent extends React.Component<RedirectComponentProps> {
        render() {
            if (!this.props.isAuth) return <Redirect to = {'/login'} />
            return <Component {...this.props} />
        }
    }

    const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedRedirectComponent;
};