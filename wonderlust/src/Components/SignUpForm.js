import React from "react"
import {Link}from "react-router-dom"


class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            username: "",
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

    setGender(event) {
        console.log(event.target.value);
      }

    render() {
        return (
            <div>
                 <Link to="/SignIn">Sign In or </Link>
          <Link to="/SignUp">Sign Up</Link>
                <form className="signup" onchange={this. handleSubmit}>
                    <div>
                    <input type="text" id="username" placeholder="Enter Your Full Name" name="username" value={this.state.name}  onChange={this.handleChange} />
                    </div>
                    <div>
                    <input type="password" id="password" placeholder="Enter your PassWord" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div>
                    <input type="Email" id="email" placeholder="Enter Email" name="Email" value={this.state.email}  onChange={this.handleChange} />
                    </div>
                    <div >
                    <input type="checkbox" name="hasAgreed" /> <span>I am a Tour Guard</span>
                    <input type="checkbox" name="hasAgreed" /> <span>I am a Customer</span>
                    </div>
                    <div>
                    <button type="submit">SignUp</button>  <a href="#">I am ALready Menber</a>
                    </div>

                </form>
            </div>
        )
    }

}

export default Signup;