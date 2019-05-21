import React from "react"
import "./Profile.css"


class ProfilePage extends React.Component {

    constructor() {
        super();
        this.state={
          bio:"",
          name:"",
          email:"",
          location:""
        }
    }

    handleChange = e => {
        let target = e.target;
        let name = target.name;
        this.setState({ [name]: e.target.value })
    }

    handleSubmit = e =>{
        e.preventDefault();
        console.log("This form was submitted with following data");
            console.log(this.state)
    }

   

    render(){
        return(
            <div>
            <div>
                <nav className="profile">
                <div className="header">
                <h1>Wanderlust</h1>
                </div>
                <div className="secondpart">
                <div >
                <a href="#">Search</a> 
                 </div>
                 <div>
                 <h1>Profile</h1>
                 </div>
                 </div>
                 </nav>
            </div>
 
            <div>
              <img/>
              <div>
              <a href="#">Profile</a>
              <a href="#">Message</a>
              <a href="#">Experiences</a>
              <a href="#">Payments</a>
              <a href="#">Profile</a>
              </div>
            </div>
            
            <div>
                <form  onSubmit={this.handleSubmit}>
                <span>Bio</span>
                <input type="name" id="name" placeholder="Enter Name" name="bio" value={this.state.bio} onChange={this.handleChange}/>
                <span>Name</span>
                <input  type="name" id="name" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                <span>Email</span>
                <input  type="email" id="email" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange}/>
                <span>Location</span>
                <input   type="name" id="name" placeholder="Enter Location" name="location" value={this.state.location} onChange={this.handleChange}/>
                <button type="submit">Save</button>
                </form>
            </div>
 
        </div>

        )
    }
}

export default ProfilePage
    

    