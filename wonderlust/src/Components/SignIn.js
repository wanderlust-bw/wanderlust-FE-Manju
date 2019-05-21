import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./form.css"


class LogIn extends React.Component {

    constructor() {
        super();

        this.state = {
            name: "",
            password: "",
            loggedIn: false
        }
    }


    handleChange = e => {
        let target = e.target;
        let name = target.name;
        this.setState({ [name]: e.target.value })

    }
    handleSubmit = e => {
        e.preventDefault();
        console.log("This form was submitted with following data");
        console.log(this.state)

        // Call axios with usrname and password 
        // if correct username setSatete logged in to true, else false
    }

    render() {
        return (
            
           
           <div>
                    <div className="login">  
                        <div className="signform">
                        <div  className="navigation">
                            <NavLink className="navlink2" to="/LogIn">LogIn or </NavLink>
                            <NavLink className="navlink2"to="/SignUp">Sign Up</NavLink>
                        </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="text">
                                <p>Username</p>
                                    <input  className="inputtexts" type="name" id="name" placeholder="Enter your UserName" name="name" value={this.state.name} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <div className="text">
                                        <p>Password</p>
                                    </div>
                                    <input  className="inputtexts" type="password" id="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <button  className="button" type="submit" >LogIn</button>  <Link className="accountlink" to="/SignUp">Create an account</Link>
                                </div>
                            </form>
                        </div>
                    </div>

                   {/* { this.state.loggedIn && <Redirecr to={Dashboard}></Redirecr>}  */}
                   </div>    
                    
                   
        )
    }
}

export default LogIn