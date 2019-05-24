import React,{Component} from "react"
import  TourExperinceList from "./ExperienceList"
import SearchBar  from "./Searchbar"
import auth from "../../token/token"
import "./view.css"
import dummy from '../../dummy'


class ExperienceView extends React.Component {
    constructor() {
      super();
      this.state = {
        tours: [],
        filterToursExperience:[],
        toggle:false
      };
    }
    componentDidMount() {
      auth().get(`https://wanderlust-1.herokuapp.com/user/trip`).then(res =>{this.setState({tours:res.data})})
      .catch(err =>{
        console.log(err, `Putting dummy data since API is returning no data`)
        this.setState({tours: dummy});
      }
      )
    }

    // ${localStorage.getItem('userId')
    searchToursHandler = e => {
        const tours = this.state.tours.filter(p => {
            if (p.location.includes(e.target.value)) {
                return p
            }
          });
          this.setState({ filterToursExperience: tours });
    }

onDelete = (e,id) =>{
  e.preventDefault();
  auth().delete(`https://wanderlust-1.herokuapp.com/user/trip/${id}`)
  .then(res =>{  this.setState({ tours: res.data })})
}

    render(){
        return(
            <div>
              <div>
                <SearchBar searchToursHandler={this.searchToursHandler}  />
                </div>
              <TourExperinceList tours={this.state.filterToursExperience.length > 0
              ? this.state.filterToursExperience
              : this.state.tours} delete={this.onDelete} />  
            </div>
        )
    }

}

export default ExperienceView