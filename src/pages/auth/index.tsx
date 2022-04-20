import React from 'react'
import { Navigate } from 'react-router-dom'

const Auth: React.FC = () => {
  const token = localStorage.getItem('token')
  if (token) {
    return <Navigate to='/home' />
  }
  return <Navigate to='/login' />
}

export default Auth
