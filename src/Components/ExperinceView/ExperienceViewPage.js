import React,{Component} from "react"
import dummyData from "../dummy";
import  TourExperinceList from "./ExperienceList"
import SearchBar  from "./Searchbar"
import auth from "../../token/token"

class PostsPage extends React.Component {
    constructor() {
      super();
      this.state = {
        tours: [],
        filterToursExperience:[]
      };
    }
    componentDidMount() {
      auth().get(`https://wanderlust-1.herokuapp.com/user/trip`).then(res =>{this.setState({tours:res.data})})
      .catch(err =>{console.log(err)})
    
      // this.setState({ tours: dummyData });
    }

    searchToursHandler = e => {
        const tours = this.state.tours.filter(p => {
            if (p.title.includes(e.target.value)) {
                return p
            }
          });
          this.setState({ filterToursExperience: tours });
    }

onDelete = (id) =>{
  auth().delete(`https://wanderlust-1.herokuapp.com/user/trip/${id}`).then(res =>{this.setState({tours:res.data})})
}

    render(){
        return(
            <div>
                <SearchBar searchToursHandler={this.searchToursHandler}  />
              <TourExperinceList tours={this.state.filterToursExperience.length > 0
              ? this.state.filterToursExperience
              : this.state.tours} delete={this.onDelete}/>  
            </div>
        )
    }

}

export default PostsPage