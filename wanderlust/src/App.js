import React from 'react';
import './App.css';
import Signup from './Component/Signup';
import Login from './Component/Login';
import { Route , Link} from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
    {/* <div className='links'>
    <h3>
    <Route className='Sign-link' to="/Signup">Sign-Up</Route>
    </h3>
    <h3>
    <Route className='Login-link' to="/Login">Login</Route>
    </h3>
    </div> */}
        <div className='Links'>
         <Link className='sign-link' to='/Signup'> Sign-Up </Link>
         <Link className='login-link' to='/Login'> Login </Link>
        </div>
      <Route exact path= '/Signup' component={Signup}Signup />
      <Route exact path= '/Login' component={Login}Login />
      
    </div>
    
  );
}

export default App;
