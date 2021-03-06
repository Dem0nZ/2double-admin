import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Admin from './containers/Admin';
import Menu from './components/Admin/Menu/Menu';
import Discount from './components/Admin/Discount/Discount';
import Contacts from './components/Admin/Contacts/Contacts';
import News from './components/Admin/News/News';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from './components/Admin/Dashboard/Dashboard';

function App() {
    return (
        <div>
            <CssBaseline />
            <Route exact path='/login'>
                <Login/>
            </Route>
            <Route exact path='/admin'>
                <Admin component={ Dashboard }/>
            </Route>
            <Route exact path='/admin/menu'>
                <Admin component={ Menu }/>
            </Route>
            <Route exact path='/admin/discount'>
                <Admin component={ Discount }/>
            </Route>
            <Route exact path='/admin/contacts'>
                <Admin component={ Contacts }/>
            </Route>
            <Route exact path='/admin/news'>
                <Admin component={ News }/>
            </Route>

        </div>
    );
}

export default App;
