import React,{Component} from 'react';
import './App.css';
import SignUp from "./Components/SignUpForm"
import LogIn from "./Components/SignIn"
import { Route, Switch } from 'react-router-dom'
import ProfilePage from "./Components/Home"
import ExperienceProfie from "./Components/ExperiencePage/ExperienceProfile"
import TravelGuide from './Components/TravelGuide'
import ExperienceView from "./Components/ExperinceView/ExperienceViewPage"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch >
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/LogIn" component={LogIn} />
          <Route exact path="/ProfilePage" component={ProfilePage} />
          <Route exact path="/TravelGuide" component={TravelGuide} />
          <Route exact path="/ExperienceProfie" component={ExperienceProfie} />
         <Route extact path="/ExperienceView" component={ExperienceView}/>
        </Switch>
      </div>
    );
  }
}

export default App;
