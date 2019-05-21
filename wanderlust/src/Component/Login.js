import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
        username: '',
        password: '',
        hasSigned: false
        }
        }
      
        handleChange = e => {
          let target = e.target;
          let name = target.name;
          this.setState({ [name]: e.target.value })
      }
      
      handleSubmit = e => {
          e.preventDefault();
          console.log(this.state)
      }

   render() {
       return(
    <div>
           <div className='key-img'>
               <img className='login-img' src='https://getitwriteonline.com/wp-content/uploads/2018/10/woman-typing-writing-windows.jpg'></img>
           </div>
        <form onSubmit={this.handleSubmit} className='login-page'>
            {/* <div className='Links'>
            <Link className='sign-link' to='/Signup'> Sign-Up </Link>
            <Link className='login-link' to='/Login'> Login </Link>
           </div> */}
            <div>
            <i id='map' class="fas fa-map"></i>
            <h3 className='title-text'><span>WanderLust</span> ...Traveling made easy</h3>
            </div> 
            <div className='login-text'>
            <h3>Log In</h3>
            </div>
            <div>
                <input 
                className='login-username'
                placeholder='Username'
                type='text'
                id='username'
                name='username'
                value={this.state.username}
                onChange={this.handleChange}>
                </input>
            </div>
            <div>
                <input 
                className='login-password'
                placeholder='Password'
                type='password'
                id='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}>
                </input>
            </div>
            <div>
                <button type='submit' className='started-button'>Log In</button>
            </div>
        </form>
    </div>
       )
   } 
}

export default Login