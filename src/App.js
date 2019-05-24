import React,{Component} from 'react';
import './App.css';
import SignUp from "./Components/SignUpForm"
import LogIn from "./Components/SignIn"
import { Route, Switch } from 'react-router-dom'
import ProfilePage from "./Components/Home"
import ExperienceProfie from "./Components/experiencePage/ExperienceProfile"
import TourGuide from './Components/TourGuide'
import TourGuideView from './Components/TravelGuide/TourGuideView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch >
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/LogIn" component={LogIn} />
          <Route exact path="/ProfilePage" component={ProfilePage} />
          <Route exact path="/TravelGuide" component={TravelGuide} />
          <Route exact path="/ExperienceProfile" component={ExperienceProfile} />
         <Route extact path="/ExperienceView" component={ExperienceView}/>
        </Switch>
      </div>
    );
  }
}

export default App;
