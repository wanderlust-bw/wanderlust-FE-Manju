import React from "react"
import { Link, NavLink } from "react-router-dom"


class SignIn extends React.Component {

    constructor() {
        super();

        this.state = {
            username: "",
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
            <div>
                <div >

                    <div>

                        <div>
                            <NavLink className="navlink1" to="/SignIn">Sign In or </NavLink>
                            <NavLink className="navlink1"to="/SignUp">Sign Up</NavLink>
                        </div>
                        <div className="siginform">
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <div>
                                        <span>Email Address</span>
                                    </div>
                                    <input  className="inputtext" type="text" id="text" placeholder="Enter your UserName" name="username" value={this.state.email} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <div>
                                        <span>PassWord</span>
                                    </div>
                                    <input  className="inputtext" type="password" id="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <button  className="button" type="submit" >Sign In</button><a href="#" className="accountlink" to="/SignUp">Create an account</a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default SignIn