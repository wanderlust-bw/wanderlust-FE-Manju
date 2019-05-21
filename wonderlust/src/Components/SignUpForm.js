import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./form.css"
import axios from "axios"


class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            name: "",
            userType: "",
           
        }
    }
     
    // async componentDidMount() {
    //     try {
    //       let res = await axios.post('http://localhost:5000/user/register', this.state);
    //       this.setState({ register: res.data })
    //     } catch (err) {
    //       console.error(err)
    //     }
    //   }

    handleChange = e => {
        let target = e.target;
        let value = target.type === "option" ? target.option : target.value;
        let name = target.name
        this.setState({ [name]: value })
    }
    
    register=input => {
        // input=this.state
        console.log('My params are', input)
        axios.post(`https://wanderlust-2.herokuapp.com/user/register`, input)
          .then(res => { console.log(res)})    
    }
    handleSubmit = e => {
        e.preventDefault();
        this.register(this.state);
        console.log("This form was submitted with following data");
        console.log(this.state)
    }

    customerType = e => {
        this.setState({userType: e.target.value});
    }

    render() {

        return (
                    
                        <div className="signform">
                        <div className="nav">
                            <NavLink className="navlink1" to="/SignUp" > SignUp or </NavLink>
                            <NavLink className="navlink1" to="/LogIn">Log In</NavLink>
                        </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="submitform" >
                                <div>
                                    <div>
                                <span className="text">Full-Name</span>
                                </div>
                                    <input className="inputtext" type="text" id="name" placeholder="Enter Your Full- Name " name="name" value={this.state.name} onChange={this.handleChange} />
                                </div>
                                <div >
                                    <div className="text">
                                        <span>Username</span>
                                    </div>
                                    <input className="inputtext1" type="text" id="text" placeholder="Enter User-Name" name="username" value={this.state.username} onChange={this.handleChange} />
                                </div>

                                <div >
                                    <div className="text">
                                        <span>Password</span>
                                    </div>
                                    <input className="inputtext" type="text" id="password" placeholder="Enter your Password" name="password" value={this.state.password} onChange={this.handleChange} />
                                </div>



                                <div className="option">
                                    <span>
                                        <select classname="select" value={this.state.userType} onChange={this.customerType}>
                                        <option name="Guide" value="SelectValue">Select Option</option>
                                            <option name="Guide" value="tourGuide">Tour Guide</option>
                                            <option name="Customer" value="customer">Customer</option>
                                        </select>
                                    </span>
                                </div>

                                <div>
                                    <button className="button" type="submit">SignUp</button> <Link className="buttontext" to="/LogIn">I am already Member</Link>
                                </div>
                                </div>
                            </form>
                        </div>
                    
             
        )
    }

}

export default Signup;