import React, { Component } from 'react';
import './App.css';
import SignUp from "./Components/SignUpForm"
import LogIn from "./Components/SignIn"
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="maindiv maindiv1">

      </div>
      <div className="maindiv maindiv2">
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/SignIn" component={LogIn} />
        </div>



      </div>
    );
  }
}

export default App;
