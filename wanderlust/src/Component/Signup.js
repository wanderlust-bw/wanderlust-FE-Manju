import React from 'react'
import './Signup.css'

const signUp = ()  => {

    return (
        <div className='sign-up'>
            <div>
            <i id='map' class="fas fa-map"></i>
            <h3 className='title-text'>WanderLust ...Traveling made easy</h3>
            </div>
            <div>
            <button><i class="fab fa-facebook-square"> Signup with Facebook</i></button>
            </div>
            <p>-or-</p>
            
            <div>
                <input 
                className='email'
                placeholder='Email'>
                </input>
            </div>
            <div>
                <input 
                className='password'
                placeholder='Password'>
                </input>
            </div>
            <div>
                <button>Get Started</button>
            </div>
         
         
        </div> /* sign-up end here */
    )

}


export default signUp;