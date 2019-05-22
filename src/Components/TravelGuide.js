import React from 'react'
import './TravelGuide.css'
import { Link } from 'react-router-dom'

class TravelGuide extends React.Component {
    constructor() {
    super(); 
    this.state = {
        name: '',
        location: '',
        discription: '',
        user_id: null,
}
}

componentDidMount() {
    const id = localStorage.getItem('')
}

handleChange = e => {
    let target = e.target;
    let name = target.name;
    this.setState({ [name]: e.target.value })
}

handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    this.setState({ saved: true })
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
                     <Link className='travel-profile' to='/ProfilePage'>Profile</Link>
                     <a className='travel-Experiences' href=''>Experiences</a>
                 </div> {/* a-links end */}

            </div> {/* travel-header end   */}

            <div className='guide-bio'>

            <form onSubmit={this.handleSubmit}>
            <div>
                <h1>TourGuide Experience</h1>
            </div>
                <div>
                    Name: <input id='guide-name' className='guide-name' name='name' value={this.state.name} onChange={this.handleChange}></input>
                </div>
                <div >
                    Location: <input id='guide-location' className='guide-email' name='location' value={this.state.location} onChange={this.handleChange}></input>
                </div>
                <div>
                    Discription: <input id='guide-discription' className='guide-location' name='discription' placeholder='...add text' value={this.state.discription} onChange={this.handleChange}></input>
                </div>
                    <button type='submit' className='guide-button' >Submit</button>
            </form>

            </div> {/* guide-bio end */}

    </div> /* travel-app end  */
        )
    }
}

export default TravelGuide;

// <img src='https://alis.alberta.ca/ImageGen.ashx?image=/media/697729/tour-guide-istock-450369213.jpg&width=930&constrain=true'></img>