
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './Navbar.css';
import { Button } from './Button';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
    <Button
    buttonStyle='btn--outline'
    onClick={() => logout()}>
      Log Out
    </Button>
    )
  )
}

export default LogoutButton
