import React from 'react';
import '../../App.css'
import LogIn from '../LogIn';
import Profile from '../Profile';
// import Logout from '../Logout';


  function Authenticate() {
    return (
      <>
        <LogIn />
        <Profile />
      </>
    );
  };

export default Authenticate
