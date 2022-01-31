import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className="w-full min-h-screen font-open relative text-neutral-700">
            <div className="bg-orange-100">
                <nav className="flex items-center justify-between px-15 py-8 max-w-screen-xl mx-auto">
                    <Link to="/" className="text-4xl tracking-wide font-bold">
                        foodabl<span className="text-green-600">e</span>
                    </Link>
                    <div className="flex items-center space-x-10">
                        <ul className="flex items-center space-x-8">
                            <li className="text-md font-normal hover:text-green-600">
                                <Link to="/" className="">Home</Link>
                            </li>
                            <li className="text-md font-normal hover:text-green-600">
                                <Link to="/" className="">Business</Link>
                            </li>
                            <li className="text-md font-normal hover:text-green-600">
                                <Link to="/" className="">Contact</Link>
                            </li>
                        </ul>
                        <button className="flex justify-center items-center bg-green-600 hover:bg-green-800 text-white py-3 px-3 w-32 rounded-md">Order now</button>
                    </div>
                </nav>
                <Outlet />
                <footer className="bg-orange-100">
                    <div className="flex  px-15 py-14 max-w-screen-xl mx-auto">
                        Footer
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default MainLayout