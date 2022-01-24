import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import sideBarNav from '../config/sideBarNav'

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = sideBarNav.findIndex(item => item.section === curPath)

        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])


    return (
        <aside className="flex flex-col h-screen sticky top-0 bg-white text-zinc-500 w-64 space-y-6 px-4 py-7">
        
        <Link to="/" className="flex space-x-2 px-4 items-center text-emerald-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
        </svg>
            <span className="text-3xl font-open font-bold">foodable</span>
        </Link>
        <nav>
            <Link to="/" className="flex space-x-2 items-center text-md py-2.5 px-4 hover:bg-neutral-200 hover:text-neutral-700 transition duration-200 rounded">
                <i className='bx bx-home-smile' ></i>
                <span>Home</span>
            </Link>
            <Link to="/products" className="flex space-x-2 py-2.5 px-4 items-center text-md hover:bg-neutral-200 hover:text-neutral-700transition duration-200 rounded">
            <i className='bx bx-store' ></i>
                <span>Order now</span>
            </Link>
            <Link to="/transactions" className="flex space-x-2 py-2.5 px-4 items-center text-md hover:bg-neutral-200 hover:text-neutral-700 transition duration-200 rounded">
                <i className='bx bx-spreadsheet'></i>
                <span>Transactions</span>
            </Link>
            <Link to="/settings" className="flex space-x-2 py-2.5 px-4 text-md items-center hover:bg-neutral-200 hover:text-neutral-700 transition duration-200 rounded">
                <i className='bx bx-user'></i>
                <span>Settings</span>
            </Link>
        </nav>
        <nav>
            <Link to="/" className="flex space-x-2 items-center text-md py-2.5 px-4 hover:bg-neutral-200 hover:text-neutral-700 transition duration-200 rounded">
                <i className='bx bx-tachometer'></i>
                <span>Invoice</span>
            </Link>
        </nav>
        
        <div className="absolute space-x-2 w-56  bottom-0 h-16">
            <Link to="/settings" className="flex space-x-2 py-2.5 px-4 text-md items-center hover:bg-neutral-200 hover:text-neutral-700 transition duration-200 rounded-lg">
                <i className='bx bx-log-out'></i>
                <span>Logout</span>
            </Link>
        </div>
    </aside>
    )
}

export default Sidebar
