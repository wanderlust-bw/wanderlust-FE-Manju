import React from "react"
import { Link } from "react-router-dom"


class SignIn extends React.Component {

    constructor() {
        super();

        this.state = {
            email: "",
            password: "",

        }
    }


    handleChange = e => {
        let target = e.target;
        let name = target.name;
        this.setState({ [name]: e.target.value })

    }


    render() {
        return (
            <div>
                <div >

                    <div>

                        <div>
                            <Link to="/SignIn">Sign In or </Link>
                            <Link to="/SignUp">Sign Up</Link>
                        </div>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <div>
                                        <span>Email Address</span>
                                    </div>
                                    <input type="email" id="email" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <div>
                                        <span>PassWord</span>
                                    </div>
                                    <input type="password" id="password" placeholder="Enter PassWord" name="password" value={this.state.password} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <button type="submit" >Sign In</button><a href="#" className="accountlink" to="/SignUp">Create an account</a>
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