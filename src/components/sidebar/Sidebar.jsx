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
        
        <Link to="/" className="flex space-x-2 px-4 items-center text-green-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
        </svg>
            <span className="text-3xl font-open font-bold">foodable</span>
        </Link>
        <nav>
            <Link to="/" className="flex space-x-2 items-center font-medium text-sm py-2.5 px-4 hover:bg-neutral-200 hover:text-neutral-700 transition duration-200 rounded">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#292D32"/>
<path d="M7.33011 15.24C7.17011 15.24 7.01011 15.19 6.87011 15.08C6.54011 14.83 6.48011 14.36 6.73011 14.03L9.11011 10.94C9.40011 10.57 9.81011 10.33 10.2801 10.27C10.7401 10.21 11.2101 10.34 11.5801 10.63L13.4101 12.07C13.4801 12.13 13.5501 12.13 13.6001 12.12C13.6401 12.12 13.7101 12.1 13.7701 12.02L16.0801 9.04001C16.3301 8.71001 16.8101 8.65001 17.1301 8.91001C17.4601 9.16001 17.5201 9.63001 17.2601 9.96001L14.9501 12.94C14.6601 13.31 14.2501 13.55 13.7801 13.6C13.3101 13.66 12.8501 13.53 12.4801 13.24L10.6501 11.8C10.5801 11.74 10.5001 11.74 10.4601 11.75C10.4201 11.75 10.3501 11.77 10.2901 11.85L7.91011 14.94C7.78011 15.14 7.56011 15.24 7.33011 15.24Z" fill="#292D32"/>
</svg>
                <span>Home</span>
            </Link>
            <Link to="/products" className="flex space-x-2 py-2.5 px-4 items-center font-medium text-sm hover:bg-neutral-200 hover:text-neutral-700 transition duration-200 rounded">
            <i className='bx bx-store' ></i>
                <span>Order now</span>
            </Link>
            <Link to="/transactions" className="flex space-x-2 py-2.5 px-4 items-center font-medium text-sm hover:bg-neutral-200 hover:text-neutral-700 transition duration-200 rounded">
                <i className='bx bx-spreadsheet'></i>
                <span>Transactions</span>
            </Link>
            <Link to="/settings" className="flex space-x-2 py-2.5 px-4 font-medium text-sm items-center hover:bg-neutral-200 hover:text-neutral-700 transition duration-200 rounded">
                <i className='bx bx-user'></i>
                <span>Settings</span>
            </Link>
        </nav>
        <nav>
            <Link to="/" className="flex space-x-2 items-center text-sm  font-medium py-2.5 px-4 hover:bg-neutral-200 hover:text-neutral-700 transition duration-200 rounded">
                <i className='bx bx-tachometer'></i>
                <span>Invoice</span>
            </Link>
        </nav>
        
        <div className="absolute space-x-2 w-56  bottom-0 h-16">
            <Link to="/settings" className="flex space-x-2 py-2.5 px-4 text-sm font-medium items-center hover:bg-neutral-200 hover:text-neutral-700 transition duration-200 rounded-lg">
                <i className='bx bx-log-out'></i>
                <span>Logout</span>
            </Link>
        </div>
    </aside>
    )
}

export default Sidebar
