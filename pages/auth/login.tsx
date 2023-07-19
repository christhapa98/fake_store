import Login from '@/components/auth/login/Login'
import withAuth from '@/hoc/authHoc'
import React from 'react'

function LoginPage() {
    return (
        <Login />
    )
}

export default withAuth(LoginPage)