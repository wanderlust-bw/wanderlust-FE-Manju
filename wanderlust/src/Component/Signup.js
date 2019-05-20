import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

class SignUp extends React.Component {
  constructor() {
  super();
  this.state = {
  name: '',
  username: '',
  password: '',
  userType: ''
  }
  }

//   componentDidMount() {
//     axios.post('http://localhost:5000/user/register', this.state)
//     .then(res => {
//         const users = res.data;
//         this.setState({ users: res.data })
//     })
//   }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({ [name]: value });
}

  customerSelect = e => {
    this.setState({userType:e.target.value})
  }

    register = input => {
    console.log(input)
    axios.post('https://wanderlust-2.herokuapp.com/user/register', input)
    .then( res => { console.log(res)})
}

handleSubmit = e => {
    e.preventDefault();
    this.register(this.state)
    // this.setState({hasSigned: true})
}
 


  render() { 

    return (
    <form onSubmit={this.handleSubmit} className='sign-up-page'>
        <div className='Links'>
         <Link className='sign-link' to='/Signup'> Sign-Up </Link>
         <Link className='login-link' to='/Login'> Login </Link>
        </div>
        <div className='sign-up'>
            <div>
            <i id='map' className="fas fa-map"></i>
            <h3 className='title-text'><span>WanderLust</span> ...Traveling made easy</h3>
            </div> 
            <div className='create-account-text'>
                <h3>Create an account</h3>
            </div>
            <div>
                <input 
                className='email'
                placeholder='Name'
                type='text'
                id='name'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}>
                </input>
            </div>
            <div>
                <input 
                className='username'
                placeholder='Username'
                type='username'
                id='username'
                name='username'
                value={this.state.username}
                onChange={this.handleChange}>
                </input>
            </div>
            <div>
                <input 
                className='password'
                placeholder='Password'
                type='password'
                id='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}>
                </input>
            </div>
            <div>
                <button type='submit' className='started-button'>Get Started</button>
            </div>
            <div className='choose-type'>
                <h3>I want to sign up as</h3>
            </div>
            <div className='check-option'>
            <select value={this.state.userType} onChange={this.customerSelect} className='user-option'>
                <option name='select' value='select-options'>Select Experience</option>
                <option className='customer-option' name='customer' value='customer'>Customer</option>
                <option className='guide-option' name='guide' value='guide'>Guide</option>
            </select>   
            </div>
        </div> 
        {/* <div>
            <img className='travel-img' src='http://iscreamsundae.com/wp-content/uploads/2016/08/TRAVEL.jpg'></img>
        </div> */}
    </form> /* sign-up-page */
    )

}
}


export default SignUp;