import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <div className="flex w-full font-open bg-neutral-50 relative">
            <main className="flex-1 w-full h-screen">
                <Outlet />
            </main>
        </div>
    )
}

export default AuthLayout
