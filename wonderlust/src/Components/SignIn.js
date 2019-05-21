import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./form.css"


class LogIn extends React.Component {

    constructor() {
        super();

        this.state = {
            name: "",
            password: "",
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
    }

    render() {
        return (

                    <div className="login">  
                        <div className="signform">
                        <div  classname="navigation">
                            <NavLink className="navlink2" to="/SignIn">Sign In or </NavLink>
                            <NavLink className="navlink2"to="/SignUp">Sign Up</NavLink>
                        </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="text">
                                    <p>UserName</p>
                                    <input  className="inputtexts" type="text" id="text" placeholder="Enter your UserName" name="name" value={this.state.name} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <div className="text">
                                        <p>PassWord</p>
                                    </div>
                                    <input  className="inputtexts" type="password" id="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <button  className="button" type="submit" >Sign In</button>  <Link className="accountlink" to="/SignUp">Create an account</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                   
        )
    }
}

export default LogIn