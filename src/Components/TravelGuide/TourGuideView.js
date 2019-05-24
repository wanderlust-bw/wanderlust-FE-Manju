import React from "react"
import  TourGuideList from "./TourGuideList"
import './guide.css'
import auth from "../../token/token"
import TourCard from "./TourCard";
import { Link } from 'react-router-dom'


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
      auth().get(`https://wanderlust-1.herokuapp.com/api/trip`).then(res => {
      console.log(res)
      this.setState({guides:res.data , inputValue: this.props.inputValue})})
      .catch(err => {console.log(err)})
    }

    // searchToursHandler = e => {
    //     const guides = this.state.guides.filter(p => {
    //         if (p.title.includes(e.target.value)) {
    //             return p
    //         }
    //       });
    //       this.setState({ filterGuidesExperience: guides });
    // }

updatehandler = (e,id) => {
e.preventDefault();
auth().put(`https://wanderlust-1.herokuapp.com/api/trip/${id}`)
.then(res => { this.setState({ guides: e.target.value })})
}    

onDelete = (e,id) => {
  e.preventDefault();
  auth().delete(`https://wanderlust-1.herokuapp.com/api/trip/${id}`)
  .then(res => { this.setState({ guides: res.data })})
}

// onDelete = (e,id) =>{
//   e.preventDefault();
//   auth().delete(`https://wanderlust-1.herokuapp.com/user/trip/${id}`)
//   .then(res =>{ this.setState({ tours: res.data })})
//  }

    render(){
        return(
           
      <div>
             <div className='travel-header'>

              <div className='travel-logo'>
              <i id='map' className="fas fa-map"></i>
              <h3 className='title-text'><span>WanderLust</span> ...Traveling made easy</h3>
              </div> {/* travel-logo end */}

              <div className='a-links'>
                <Link className='travel-profile' to='/TourGuide'>Tour Guide</Link>
              </div> {/* a-links end */}
             </div>
        
             <div>
                {/* <SearchBar searchToursHandler={this.searchToursHandler}  /> */}
               <TourGuideList /* guides={this.state.filterGuidesExperience.length > 0
              ? this.state.filterGuidesExperience
              : this.state.guides} */ guides={this.state.guides} delete={this.onDelete} update={this.updatehandler} /> 
              {/* <TourCard guides={this.state.guides} delete={this.onDelete} />  */}
            </div>
           </div>
        )
    }

}

export default TourGuideView;