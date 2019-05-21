import React, { Component } from 'react';
import './App.css';
// import SignUp from "./Components/SignUpForm"
// import LogIn from "./Components/SignIn"
// import { Route } from 'react-router-dom';
import SignInLogInForms from "./Components/Forms"

class App extends Component {
  render() {
    return (
      <div className="App">
      <SignInLogInForms />
      </div>
    );
  }
}

export default App;
 {/* <Route exact path= "/Dashboard" component={Dashboard} */}