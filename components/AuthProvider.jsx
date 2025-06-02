"use client"
import React, { Children } from 'react'

const AuthProvider = () => {
  return (
    <div>
        <SessionProvider> {Children}</SessionProvider>
    </div>
  )
}

export default AuthProvider
