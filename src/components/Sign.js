import React from 'react'
import './Sign.css'
// import { Link } from 'react-router-dom'
// import { Button } from './Button'
import { useAuth0 } from '@auth0/auth0-react';





function Sign() {

    const { signUpWithRedirect } = useAuth0();

  return (
    <div className='sign'>
      <div className='sign-container'>
        <h2 className='sign-in-header'>Sign up to create an Account</h2>
        <div className='box'>First Name
          <form>
            <input type='email' className='form' placeholder='Enter your first name'/>
          </form>
        </div>
        <div className='box'>Last Name
          <form>
            <input type='email' className='form' placeholder='Enter your last name'/>
          </form>
        </div>
        <div className='box'>Phone Number
          <form>
            <input type='email' className='form' placeholder='Enter your number'/>
          </form>
        </div>
        <div className='box'>Email
          <form>
            <input type='email' className='form' placeholder='Enter your email'/>
          </form>
        </div>
        <div className='box'>Password
          <form>
            <input type='email' className='form' placeholder='Create a password'/>
          </form>
        </div>
        <button
         buttonStyle='btn--primary'
         id='BtnSignup'
         onCLick={() => signUpWithRedirect()}> Sign Up!</button>
        <small className='forgot'>Forgot Password</small>
      </div>

    </div>


  )

};


  export default Sign;
