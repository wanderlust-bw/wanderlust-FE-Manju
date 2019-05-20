import React from "react"
import {Link, NavLink}from "react-router-dom"
import "./form.css"


class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            name: "",
            hasAgreed: false

        }
    }

    handleChange = e => {
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name
        this.setState({ [name]: value })

    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("This form was submitted with following data");
        console.log(this.state)
    }

   

  
      

    render() {
       
            return (
              <div className="maindivs">
              <div className="App">
               <div className="maindiv maindiv1">
               </div>
              <div className="maindiv maindiv2"> 
                
                <div className="nav">
                  <NavLink className="navlink1" to="/SignIn" >Sign In or </NavLink>
                  <NavLink className="navlink1" to="/SignUp">Sign Up</NavLink>
                </div> 
                <div className="siginform">
                    <form onSubmit={this.handleSubmit}>
                        <div >
                        <div className="text">
                        <div>FullName</div>
                        </div>
                        <input className="inputtext"  type="text" id="name" placeholder="Enter Your Full Name name" name="name" value={this.state.name} onChange={this.handleChange} />
                        </div>
                        
                        <div >
                        <div className="text">
                        <span>PassWord</span>
                        </div>
                        <input className="inputtext"  type="text" id="password" placeholder="Enter your PassWord" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
    
                        <div >
                        <div className="text">
                        <span>E-Mail Address</span>
                        </div>
    
                        <input  className="inputtext"  type="email" id="email" placeholder="Enter E-Mail your Email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>
    
                        <div className="checkbox">
                        <span>
                        <input  type="checkbox" name="hasAgreed" value={this.state.hasAgreed}   onChange={this.handleChange} /> <span >Tour Guide</span>
                            <input  type="checkbox" name="hasAgreed" value={this.state.hasAgreed}    onChange={this.handleChange} /> <span >Customer</span>
                        </span>
                        </div>
    
                         <div>
                        <button  type="submit">SignUp</button> <Link  className="buttontext" to="/SignIn">I am already Member</Link>
                        </div>
                    </form>
                    </div>  </div>  </div>  
                </div>
            )
    }

}

export default Signup;