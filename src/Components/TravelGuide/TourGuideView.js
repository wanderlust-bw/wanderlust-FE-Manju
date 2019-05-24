import React from "react"
import  TourGuideList from "./TourGuideList"
// import SearchBar  from "./Searchbar"
import auth from "../../token/token"
import TourCard from "./TourCard";

class TourGuideView extends React.Component {
    constructor() {
      super();
      this.state = {
        guides: [],
        // filterGuidesExperience:[],
        // toggle:false
      };
    }
    componentDidMount() {
      auth().get(`https://wanderlust-1.herokuapp.com/user/trip`).then(res =>{this.setState({guides:res.data})})
      .catch(err =>{console.log(err)})
    }

    // searchToursHandler = e => {
    //     const guides = this.state.guides.filter(p => {
    //         if (p.title.includes(e.target.value)) {
    //             return p
    //         }
    //       });
    //       this.setState({ filterGuidesExperience: guides });
    // }

onDelete = (e,id) =>{
  e.preventDefault();
  auth().delete(`https://wanderlust-1.herokuapp.com/user/trip/${id}`)
  .then(res =>{ this.setState({ guides: res.data })})
}

// onDelete = (e,id) =>{
//   e.preventDefault();
//   auth().delete(`https://wanderlust-1.herokuapp.com/user/trip/${id}`)
//   .then(res =>{ this.setState({ tours: res.data })})
//  }

    render(){
        return(
            <div>
                {/* <SearchBar searchToursHandler={this.searchToursHandler}  /> */}
              <TourGuideList /* guides={this.state.filterGuidesExperience.length > 0
              ? this.state.filterGuidesExperience
              : this.state.guides} */ guides={this.state.guides} delete={this.onDelete} /> 
              {/* <TourCard guides={this.state.guides} delete={this.onDelete} />  */}
            </div>
        )
    }

}

export default TourGuideView;