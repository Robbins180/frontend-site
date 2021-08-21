import React from 'react'
import './Sign.css'
// import { Link } from 'react-router-dom'
// import { Button } from './Button'
import { useAuth0 } from '@auth0/auth0-react';





const SignUp = () => {

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        onClick={() => loginWithRedirect()}
        id='BtnSignup'>Sign Up
      </button>
      )
    )
  };


  export default SignUp;
