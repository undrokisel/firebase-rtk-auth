import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>
        Or <Link to="/register">register</Link>
      </p>
    </div>
  )
}
