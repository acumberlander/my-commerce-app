import React from 'react'
import Auth from '../components/Auth/Auth'
import { AppWrapper } from '../components/UserProvider'
const AuthPage = () => {
  return (
    <div>
      <AppWrapper>
        <Auth />
      </AppWrapper>
    </div>
  )
}

export default AuthPage