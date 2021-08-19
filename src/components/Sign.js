import React from 'react'
import './Sign.css'
// import { Link } from 'react-router-dom'
// import { Button } from './Button'
import { useAuth0 } from '@auth0/auth0-react';





const Sign = () => {

  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

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
        <div className='box'>Phone
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
         onClick={() => loginWithRedirect()}
         id='BtnSignup'>Sign Up
       </button>
        <small className='forgot'>Forgot Password</small>
      </div>

    </div>


   //  !isAuthenticated && (
   //   <button onClick={() =>
   //       signUpWithRedirect()}
   //     >
   //     Log In
   //   </button>
   // )
  )
};


  export default Sign;
