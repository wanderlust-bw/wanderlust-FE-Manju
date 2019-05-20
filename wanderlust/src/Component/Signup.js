import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

class SignUp extends React.Component {
  constructor() {
  super();
  this.state = {
  email: '',
  username: '',
  password: '',
  hasSigned: false
  }
  }

  handleChange = e => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checkbox: target.value;
    let name = target.name
    this.setState({ [name]: value })
}

handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
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
                placeholder='Email'
                type='email'
                id='email'
                name='email'
                value={this.state.email}
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
            <input className='customer' type='checkbox' name='user' value='customer' onChange={this.handleChange}></input> Customer
            <input className='guide' type='checkbox' name='user' value='customer' onChange={this.handleChange}></input> Tour Guide
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