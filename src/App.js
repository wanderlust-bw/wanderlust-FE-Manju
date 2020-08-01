import React,{Component} from 'react';
import './App.css';
import SignUp from "./Components/SignUpForm"
import LogIn from "./Components/SignIn"
import { Route, Switch } from 'react-router-dom'
import Home from "./Components/Home"
import ExperienceProfile from "./Components/ExperiencePage/ExperienceProfile"
import TourGuide from './Components/TourGuide'
import TourGuideView from './Components/TravelGuide/TourGuideView'
import ExperienceView from './Components/ExperienceView/ExperienceViewPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch >
         <Route exact path="/signup" component={SignUp} />
          <Route  path="/LogIn" component={LogIn} />
          <Route  path="/Home" component={Home} />
          <Route  path="/TourGuide" component={TourGuide} />
          <Route  path="/TourGuideView" component={TourGuideView} />
          <Route  path="/ExperienceProfile" component={ExperienceProfile} />
          <Route  path="/ExperienceView" component={ExperienceView}/>
        </Switch>
      </div>
    );
  }
}

export default App;
