import React from "react"
import { Link, NavLink, Redirect } from "react-router-dom"
import "./form.css"
import ProfilePage from "./Home"
import axios from "axios"

class LogIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    }
  }

  handleChange = e => {
    let target = e.target;
    let value = target.value;
    let name = target.name
    this.setState({ [name]: value })
  }

  login = input => {
    axios.post(`https://wanderlust-1.herokuapp.com/user/login`, input)
      .then(res => {
        localStorage.setItem("jwt", res.data.token)
        localStorage.setItem("userType", res.data.userType)
        localStorage.setItem("userId", res.data.userId)
        if (localStorage.getItem("userType") === "tourGuide") {
          this.props.history.push("/ProfilePage")
        } else if (localStorage.getItem("userType") === "customer") {
          this.props.history.push("/ProfilePage")
        }
      })
      .catch(err => { console.log(err) })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.login(this.state);
  }

  render() {
    return (
        <div>
          <div className="login">
            <div className="signform">
              <div className="navigation">
                <NavLink className="navlink2" to="/LogIn">LogIn or </NavLink>
                <NavLink className="navlink2" to="/SignUp">Sign Up</NavLink>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="text">
                  <p>Username</p>
                  <input className="inputtexts" type="name" id="name" placeholder="Enter your UserName" name="username" value={this.state.username} onChange={this.handleChange} />
                </div>

                <div>
                  <div className="text">
                    <p>Password</p>
                  </div>
                  <input className="inputtexts" type="password" id="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>

                <div>
                  <button className="button" type="submit" >LogIn</button> <Link className="accountlink" to="/SignUp">Create an account</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        )
    }
}

export default LogIn