import React from "react"
import { Link, NavLink,Redirect } from "react-router-dom"
import "./form.css"
import ProfilePage from "./Home"



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

    // register=(password ,name) => {
    //     // input=this.state
    //     console.log('My params are', input)
    //     axios.post(`https://wanderlust-2.herokuapp.com/api/register`, 
    //       .then(res => { console.log(res)})    
    // }
    // handleSubmit = e => {
    //     e.preventDefault();
    //     this.register(this.state);
    //     console.log("This form was submitted with following data");
    //     console.log(this.state)
    // }

    // handleSubmit = e => {
    //     e.preventDefault();
    //    let password= localStorage.getItem(this.state.name)
    //     if (password === this.state.password) {
    //         this.setState({loggedIn : true })
    //     } else {
    //         this.setState({loggedIn: false })
    //     }
    //     console.log("This form was submitted with following data");
    //     console.log(this.state)
    // }

        
 
    

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
                                    <Link to="/ProfilePage"><button  className="button" type="submit" >LogIn</button></Link>  <Link className="accountlink" to="/SignUp">Create an account</Link>
                                </div>
                            </form>
                        </div>
                    </div>

                   {/* { this.state.loggedIn && <Redirect  to={ProfilePage}></Redirect >}  */}
                   </div>    
                    
                   
        )
    }
}

export default LogIn