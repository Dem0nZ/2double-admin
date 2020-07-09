import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login/Login';
import AdminWithRedirect from './components/Admin/Admin';

function App() {
  return (
    <div>
        <Route exact path='/login'>
            <Login/>
        </Route>
        <Route exact path='/admin'>
            <AdminWithRedirect/>
        </Route>

    </div>
  );
}

export default App;
