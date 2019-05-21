import React from 'react'
import './Experiences.css'


class Experiences extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
     locations: '',
     addTrips: ''
    }
    }

    handleChange = e => {
        const {name , value } = e.target
        this.setState({ [name]:value })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('hi')
        console.log(this.state)
    }

    // locationHandler = e => {
    //     this.props.locationHandler(this.state.locations)
    //     console.log('im here')
    //     console.log(this.state)
    // }

    // tripHandler = e => {
    //     this.props.tripHandler(this.state.trips)
    // }

    render() {
        return(
            <div className='profile-app'>

            <div className='nav-section'>
                <div className='exp-title'>
                    <h3 className='exp-title-text'><span>WanderLust</span> ...Traveling made easy</h3>
                </div>

                <div className='profile-link'>
                    <a href='#'>Profile</a>
                </div>
            </div> {/* nav-section end */}

            <div className='share-text'>
                <h1>Share your Experiences!</h1>
            </div>
                

            <div className='top-section'>

             <div className='input-section'>

                  <form onSubmit={this.handleSubmit} className='exp-form-section'>
                  <div className='location-section'>
                      <div>
                        <button type='submit'><i className="fas fa-plus"></i></button>
                      </div>
                      <div>
                        <input
                        className='locations'
                        placeholder='Add Locations'
                        name='location'
                        value={this.state.name}
                        onChange={this.handleChange}>
                        </input>
                      </div>
                  </div>
                  <div className='trips-section'>
                      <div>
                         <button type='submit'><i className="fas fa-plus"></i></button>
                      </div>
                      <div>
                        <input
                        className='trips'
                        placeholder='Add Trips'
                        name='trip'
                        value={this.state.name}
                        onChange={this.handleChange}>
                        </input>
                      </div>
                  </div> 
                  </form> {/* exp-form-section end */}
                  
                </div> {/* input-section end */}

                 <div className='user-info'>
                    <h3>Name:</h3>
                    <h3>Username:</h3>
                    <h3>E-mail:</h3>
                  </div>

                 <div className='saved-inputs'>
                    <h3>Locations:</h3>
                    <h3>Trips Made:</h3>
                  </div>

            </div> {/* top-section end */}
                
            </div> /* profile-app end */
        )
    }
}
export default Experiences