import React from 'react'
import './TravelGuide.css'
import { Link } from 'react-router-dom'
import auth from '../token/token'



class TourGuide extends React.Component {
    constructor() {
    super(); 
    this.state = {
        title: '',
        location: '',
        description: '',
        duration: undefined,
        tourType: '',
        user_id: null
}
}

componentDidMount() {
    const id = Number(localStorage.getItem('userId'))
    this.setState({ user_id: id})
}

handleChange = e => {
    const {name , value} = e.target;
    if(name === 'duration') {
        this.setState({[name]: Number(value)})
    } else {
    this.setState({[name]:value})
    }
}

post = input => {
    auth().post('https://wanderlust-1.herokuapp.com/api/trip', input)
    .then(res => {console.log(res)}).catch(err => {console.log(err)})
}

handleSubmit = (e) => {
    e.preventDefault();
    this.post(this.state)
    this.setState( {title: '' , location: '' , description: '' , user_id: null })
}

customerSelect = e => {
    this.setState({tourType: e.target.value})
  }

    render() {
        return (
    <div className='travel-app'>

            <div className='travel-header'>

                 <div className='travel-logo'>
                    <i id='map' className="fas fa-map"></i>
                    <h3 className='title-text'><span>WanderLust</span> ...Traveling made easy</h3>
                 </div> {/* travel-logo end */}

                 <div className='a-links'>
                     <Link className='travel-profile' to='/TourGuideView'>View Experience</Link>
                 </div> {/* a-links end */}

            </div> {/* travel-header end   */}

            <div className='guide-bio'>

            <form onSubmit={this.handleSubmit}>
            <div>
                <h1>TourGuide Experience</h1>
            </div>
                <div>
                    Name: <input id='guide-name' className='guide-name' name='title' value={this.state.title} onChange={this.handleChange}></input>
                </div>
                <div >
                    Location: <input id='guide-location' className='guide-email' name='location' value={this.state.location} onChange={this.handleChange}></input>
                </div>
                <div>
                    Description: <input id='guide-description' className='guide-location' name='description' placeholder='...add text' value={this.state.description} onChange={this.handleChange}></input>
                </div>
                <div>
                    Duration: <input id='guide-duration' type='number' className='guide-duration' name='duration' value={this.state.duration} onChange={this.handleChange}></input>
                </div>
                <div>
            <select /* id='guide-css' */ className='select-css' value={this.state.tourType} onChange={this.customerSelect}>
                <option name='select' value='select-options'>Tour Type</option><i className="fas fa-caret-down"></i>
                <option className='private-option' name='private' value='private'>Private</option>
                <option className='professional-option' name='professional' value='customer'>Professional</option>
            </select>   
            </div>
                    <button type='submit' className='guide-button' >Submit</button>
            </form>

            </div> {/* guide-bio end */}

    </div> /* travel-app end  */
        )
    }
}

export default TourGuide;

// <img src='https://alis.alberta.ca/ImageGen.ashx?image=/media/697729/tour-guide-istock-450369213.jpg&width=930&constrain=true'></img>