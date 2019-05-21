import React, { Component } from 'react';
import './App.css';
import SignUp from "./Components/SignUpForm"
import LogIn from "./Components/SignIn"
import { Route, Switch } from 'react-router-dom'
import ProfilePage from "./Components/Home"


class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch >
       <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/LogIn" component={LogIn} />
      <Route exact path="/ProfilePage" component={ProfilePage}/>
      </Switch>
      </div>
    );
  }
}

export default App;
