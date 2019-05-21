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
                <div className="text" >
                <a  className="search" href="#">Search</a> 
                 </div>
                 <div>
                 <h1>Profile</h1>
                 </div>
                 </div>
                 </nav>
                 <div classname="about">
              <img/>
              <div >
              <a href="#">Profile</a>
              <a href="#">Message</a>
              <a href="#">Experiences</a>
              <a href="#">Payments</a>
            
              </div>
            </div>
         
            
            <div>
                <form  className="form" onSubmit={this.handleSubmit}>
                    <div className="maindiv">
                <span className="textitem">Bio : </span>
                <input  className="textitem" type="name" id="name" placeholder="Enter Name" name="bio" value={this.state.bio} onChange={this.handleChange}/>
                </div>
                <div className="maindiv">
                <span >Name : </span>
                <input className="textitem"  type="name" id="name" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                </div>
                <div className="maindiv">
                <span className="textitem">Email : </span>
                <input className="textitem"  type="email" id="email" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div className="maindiv">
                <span className="textitem">Location : </span>
                <input className="textitem" type="name" id="name" placeholder="Enter Location" name="location" value={this.state.location} onChange={this.handleChange}/>
                </div>
                <div className="maindiv">
                <button type="submit">Save</button>
                </div>
                </form>
         
            </div>
            </div>
 
        </div>

        )
    }
}

export default ProfilePage
    

    