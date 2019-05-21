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
  <div className='sign-page'>     
    <form onSubmit={this.handleSubmit} className='sign-up-form'>
        <div className='sign-up'>
            <div>
            <i id='map' className="fas fa-map"></i>
            <h3 className='title-text'><span>WanderLust</span> ...Traveling made easy</h3>
            </div> 
            <div className='form-section'>
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
            
        </div> 
        
    </form> 
        <div className='image'>
            <img className='travel-img' src='https://static1.squarespace.com/static/55d64111e4b0a862eed6a419/t/5ad68395575d1f7b2e1146ae/1524007832532/new-year-travel.jpg?format=1000w'></img>
        </div> 
    </div> 
    )

}
}


export default SignUp;