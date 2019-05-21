import React from 'react';
import './App.css';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Experiences from './Component/Experiences'
import { Route , Switch} from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Switch>
      <Route exact path= '/Signup' component={Signup}Signup />
      <Route exact path= '/Login' component={Login}Login />
      <Route exact path= '/Experiences' component={Experiences}Experiences />
      </Switch>
    </div>
    
    
  );
}

export default App;
