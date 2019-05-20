import React, { Component } from 'react';
import './App.css';
import SignUp from "./Components/SignUpForm"
import SignIn from "./Components/SignIn"
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/SignIn" component={SignIn} />



      </div>
    );
  }
}

export default App;
