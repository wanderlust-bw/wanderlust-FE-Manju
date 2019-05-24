import React, { Component }from "react"
import "./experence.css"
import auth from "../../token/token"
import {Link} from "react-router-dom"

class ExperienceProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            user_id: null,
            title: "",
            description: "",
            location: "",
            duration: undefined,
            tourType: ''
        }

    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }




    postExperience = input => {
        // input=this.state
        console.log('My params are', input)
        auth().post(`https://wanderlust-1.herokuapp.com/api/trip`, input)
            .then(res => { console.log(res) })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.postExperience(this.state);
        console.log("This form was submitted with following data");
        console.log(this.state)
    }
    componentDidMount() {
        const id = Number(localStorage.getItem("userId"))

        this.setState({ user_id: id })


    }

    customerSelect = e => {
        this.setState({tourType:e.target.value})
      }


    render() {
        return (
            <div>
            <div className="profilecomponent">
             <div className="package">
             <div className="header">    
             <div className='travel-logo'>
           <i id='map' className="fas fa-map"></i>
           <h3 className='title-text'><span>WanderLust</span> ...Traveling made easy</h3>
       </div> {/* travel-logo end */}
             </div>
              <div className="stuff">
                <input  className="searchbox" type="text" placeholder="Search" />
                <Link  className="together" to="/ExperienceView">ExperienceView</Link>
                 <Link  className="together" to="/ExperienceProfile">ExperienceProfile</Link>
                 <Link className="together" to="ProfilePage">ProfilePage</Link>
            </div>
      
              </div>
               
                <div>
               
                    <form className="description" onSubmit={this.handleSubmit}>
                    <h1 className="index3">Fill free to add your Tour Experience</h1>
                        <div>
                            <div classname="guides">
                            <label className="index2">Title</label>
                            </div>
                            
                            <input className="index" type="text" id="title" placeholder="Enter Title" name="title" value={this.state.title} onChange={this.handleChange} />
                        </div>
                        <div>
                            <div>
                            <label className="index2">Location</label>
                            </div>
                            <input className="index"  type="text" id="name" placeholder="Enter Location" name="location" value={this.state.location} onChange={this.handleChange} />
                        </div>
                        <div>
                            <div>
                            <label className="index2">Description </label>
                            </div>
                            <input className="index" type="text" id="name" placeholder="...Enter Tour Experience" name="description" value={this.state.description} onChange={this.handleChange} />
                        </div>


                        <div>
                        <div>
                            <label className="index2">Duration </label>
                            </div>
                    <input  className="index " id='guideduration' type='number'  name='duration' value={this.state.duration} onChange={this.handleChange}></input>
                </div>
                <div>
            <select  value={this.state.tourType} onChange={this.customerSelect}>
                <option name='select' value='select-options'>Tour Type</option><i className="fas fa-caret-down"></i>
                <option className='private-option' name='private' value='private'>Private</option>
                <option className='professional-option' name='professional' value='customer'>Professional</option>
            </select>   
            </div>

                       <button className="button1" type="submit">Add Experience</button>
                    </form>
                </div>

            </div>
            </div>
        )
    }

}

export default ExperienceProfile