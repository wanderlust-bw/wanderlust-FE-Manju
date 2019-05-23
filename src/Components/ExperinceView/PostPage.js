import React,{Component} from "react"
import dummyData from "../dummy";
import  TourExperinceList from "./ExperienceList"

class PostsPage extends React.Component {
    constructor() {
      super();
      this.state = {
        tours: [],
      };
    }
    componentDidMount() {
      this.setState({ tours: dummyData });
    }

    render(){
        return(
            <div>
              <TourExperinceList tours={this.state.tours}/>  
            </div>
        )
    }

}

export default PostsPage