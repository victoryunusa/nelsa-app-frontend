import React from 'react'
import { Outlet } from 'react-router-dom'

//components
import Sidebar from '../components/sidebar/Sidebar'

const MainLayout = () => {
    return (
        <div className="flex w-full font-open bg-neutral-100 relative">
            <Sidebar />
            <main className="flex-1 w-full p-10 mt-5 text-zinc-500 ">
                <Outlet />
            </main>
            
        </div>
    )
}

export default MainLayout
