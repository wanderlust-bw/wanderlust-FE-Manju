import React from "react"
import { Link, NavLink,Redirect } from "react-router-dom"
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
        let value = target.type === "option" ? target.option : target.value;
        let name = target.name
        this.setState({ [name]: value })
    }
    
    login=input => {
        // input=this.state
        console.log('My params are', input)
        axios.post(`https://wanderlust-1.herokuapp.com/user/login`, input)
          .then(res => {  console.log(res), localStorage.setItem("jwt", res.data.token)
          localStorage.setItem("userType", res.data.userType)
          localStorage.setItem("userId", res.data.userId)
          if(localStorage.getItem("userType") === "tourGuide") {
              this.props.history.push("/ProfilePage") 
          }
          else if (localStorage.getItem("userType") === "customer") {
            this.props.history.push("/ProfilePage") 
        }
         }
           ) 
         
          .catch(err => { console.log(err)})     
    }
    handleSubmit = e => {
        e.preventDefault();
        this.login(this.state);
        console.log("This form was submitted with following data");
        console.log(this.state)
    }



    // handleChange = e => {
    //     // let target = e.target;
    //     // let name = target.name;
    //     this.setState({ [e.target.name]: e.target.value })

    // }

    // login=(e,input) => {
    //     e.preventDefault()
    //     // input=this.state
    //     console.log('My params are')
    //     axios.post(`https://wanderlust-1.herokuapp.com/user/login`, this.state)
        
    //       .then(res => { console.log(res)})
    //       .catch(err => { console.log(err)})
              
    // }

// login = e => {
//         e.preventDefault();
//         this.register(this.state);
//         console.log("This form was submitted with following data");
//         console.log(this.state)
//     }

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
                                    <input  className="inputtexts" type="name" id="name" placeholder="Enter your UserName" name="username" value={this.state.username} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <div className="text">
                                        <p>Password</p>
                                    </div>
                                    <input  className="inputtexts" type="password" id="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange} />
                                </div>

                                <div>
                                   <button  className="button" type="submit" >LogIn</button> <Link className="accountlink" to="/SignUp">Create an account</Link>
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