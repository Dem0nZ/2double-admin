import React from 'react';
import { Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div>
        <Route path='/login'>
            <Login/>
        </Route>
        <Route path='/admin'>
            <Admin/>
        </Route>

    </div>
  );
}

export default App;
