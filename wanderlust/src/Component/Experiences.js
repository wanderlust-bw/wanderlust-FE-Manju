import React from 'react'
import './Experiences.css'


class Experiences extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
     location: '',
     locationsBox: [],
     trip: '',
     addTripsBox: []
    }
    }

    handleChange = e => {
        const {name , value } = e.target
        this.setState({ [name]:value })
    }

    handleSubmit = e => {
        e.preventDefault();
        // console.log('hi')
        console.log(this.state)
    }

    addLocation = e => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
        locationsBox: [ ...this.state.locationsBox , this.state.location]
        })
        console.log("hi " , this.state)
    }

    addTrips = e => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
        addTripsBox: [ ...this.state.addTripsBox , this.state.trip]
        })
    }

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
                        <button onClick={this.addLocation} type='submit'><i className="fas fa-plus"></i></button>
                      </div>
                      <div>
                        <input
                        className='locations'
                        placeholder='Add Travels'
                        name='location'
                        value={this.state.name}
                        onChange={this.handleChange}>
                        </input>
                      </div>
                  </div>
                  <div className='trips-section'>
                      <div>
                         <button onClick={this.addTrips} type='submit'><i className="fas fa-plus"></i></button>
                      </div>
                      <div>
                        <input
                        className='trips'
                        placeholder='Add Images'
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

                 <form locationsBox={this.locationsBox} handleChange={this.handleChange} className='saved-inputs'>
                    <h3>Add Travels</h3>
                    <p>{this.state.locationsBox}</p>
                  </form>

                  <form addTripsBox={this.addTripsBox} handleChange={this.handleChange} className='saved-inputs'>
                  <h3>Add Photos</h3><p>{this.state.addTripsBox}</p>
                  </form>

            </div> {/* top-section end */}
                
            </div> /* profile-app end */
        )
    }
}
export default Experiences