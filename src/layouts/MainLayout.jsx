import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className="w-full min-h-screen font-open relative text-neutral-700">
            <div className="bg-teal-900">
                <nav className="flex items-center justify-between px-15 py-8 max-w-screen-xl mx-auto text-white">
                    <Link to="/" className="text-2xl font-rubik tracking-wide font-bold">
                        foodabl<span className="text-green-500">e</span>
                    </Link>
                    <div className="flex items-center space-x-10">
                        <ul className="flex items-center space-x-8">
                            <li className="text-md font-normal hover:text-green-500">
                                <Link to="/" className="">Home</Link>
                            </li>
                            <li className="text-md font-normal hover:text-green-500">
                                <Link to="/" className="">Business</Link>
                            </li>
                            <li className="text-md font-normal hover:text-green-500">
                                <Link to="/" className="">Suppliers</Link>
                            </li>
                            <li className="text-md font-normal hover:text-green-500">
                                <Link to="/" className="">Contact</Link>
                            </li>
                        </ul>
                        <button className="flex justify-center items-center bg-green-500 hover:bg-teal-700 hover:shadow-lg text-white py-3 px-3 w-32 rounded-md">Order now</button>
                    </div>
                </nav>
                <Outlet />
                <footer className="bg-teal-900 text-white">
                    <div className="px-15 py-10 max-w-screen-xl mx-auto">
                        <div className="flex w-full mb-10 h-52">
                            <div className="flex-col w-1/3">
                                <div className="flex">
                                    <Link to="/" className="text-2xl tracking-wide font-bold font-rubik">
                                        foodabl<span className="text-green-500 ">e</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-row w-2/3">
                                <div className="flex w-full">
                                    <div className="flex flex-col w-1/3">
                                        <h3 className="font-bold pb-4 text-xl">General</h3>
                                        <ul className="flex flex-col gap-y-2">
                                            <li><Link to="#">Restaurants</Link></li>
                                            <li><Link to="#">Suppliers</Link></li>
                                            <li><Link to="#">FAQ</Link></li>
                                            <li><Link to="#">Product updates</Link></li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col w-1/3">
                                        <h3 className="font-bold pb-4 text-xl">Work with us</h3>
                                        <ul className="flex flex-col gap-y-2">
                                            <li><Link to="#">About</Link></li>
                                            <li><Link to="#">Careers</Link></li>
                                            <li><Link to="#">Contact us</Link></li>
                                            <li><Link to="#">Press</Link></li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col w-1/3">
                                        <h3 className="font-bold pb-4 text-xl">Follow our stories</h3>
                                        <ul className="flex flex-col gap-y-2">
                                            <li><Link to="#">Restaurant management</Link></li>
                                            <li><Link to="#">Producer guide</Link></li>
                                            <li><Link to="#">Life at Foodable</Link></li>
                                            <li><Link to="#">Foodable Chef Lab</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between pt-4">
                            <div>
                                <p className="text-sm">© Foodable by Agrilet 2022</p>
                            </div>
                            <div>
                                <p className="text-sm">Terms and conditions · Privacy policy · Cookies</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default MainLayout