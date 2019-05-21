import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
        username: '',
        password: '',
        logged: false
        }
        }
      
        handleChange = e => {
          let target = e.target;
          let name = target.name;
          this.setState({ [name]: e.target.value })
      }
      
      handleSubmit = e => {
          e.preventDefault();
          this.setState({logged:true})
          console.log(this.state)
      }

   render() {
       return(
    <div>
        <div className='Links'>
         <Link className='sign-link' to='/Signup'> Sign-Up </Link>
         <Link className='login-link' to='/Login'> Login </Link>
        </div>
           <div className='key-img'>
               <img className='login-img' src='https://www.visitflorida.com/content/visitflorida/en-us/travel-ideas/_jcr_content/full_width/vf_image.img.1280.500.jpg'></img>
           </div>
        <form onSubmit={this.handleSubmit} className='login-page'>
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
           <Link to='/Experiences'> <button type='submit' className='started-button'>Log In</button></Link>
            </div>
        </form>
    </div>
       )
   } 
}

export default Login