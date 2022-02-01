import React from 'react'
import logo from '../assets/images/landing-2.png'
import retail from '../assets/images/price-tag.png'
import delivery from '../assets/images/delivery-truck.png'
import environment from '../assets/images/environment.png'

const Home = () => {
    return (
        <>
            <div className="flex justify-between px-15 py-8 max-w-screen-xl gap-10 mx-auto">
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold pt-4 tracking-tighter leading-tight pb-4">Sourcing the <span className="text-green-600">freshest</span> ingredients for your restaurant.</h1>
                    <p className="leading-relaxed tracking-wide text-sm">Join our community of leading caterers, restaurateurs and hospitality businesses who enjoy better buying power whilst ensuring fair pricing, traceability and quality across all produce categories.</p>
                    <div className="flex gap-x-6 items-center pt-5">
                        <button className="py-3 px-3 w-32 border border-green-600 text-green-600 hover:border-green-800 hover:text-green-800 font-normal rounded-md">Login</button>
                        <button className="flex justify-center items-center bg-green-600 hover:bg-green-800 text-white py-3 px-3 w-32 rounded-md">Sign Up</button>
                    </div>
                </div>
                <div className="w-1/2 relative">
                    <img className="max-w-xl self-end" src={logo} alt="landing.png" />
                    <div className="absolute -right-6 top-32 flex flex-col py-5 px-7 rounded-md shadow-xl bg-white/50 backdrop-blur-xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                        <div className="font-bold">Fast delivery</div>
                        <div>2 hours delivery 🚀</div>
                    </div>

                </div>
            </div>
            <div className="w-full bg-white ">
                <div className="flex justify-center  px-15 py-14 max-w-screen-xl mx-auto gap-4">
                    <div className="w-1/3 border border-neutral-500 mr-4 p-5 rounded-md">
                        <img src={retail} alt="retail" className="w-10 pb-2" />
                        <h1 className="text-xl font-bold">Retail prices</h1>
                        <p className="text-sm">Same prices as your local supermarket & no minimum order value.</p>
                    </div>
                    <div className="w-1/3 border border-neutral-500 mr-4 p-5 rounded-md">
                        <img src={delivery} alt="delivery" className="w-10 pb-2" />
                        <h1 className="text-xl font-bold">Instant delivery</h1>
                        <p className="text-sm tracking-tight">Timing is everything. We’ll be at your door before you know it.</p>
                    </div>
                    <div className="w-1/3 border border-neutral-500 mr-4 p-5 rounded-md">
                        <img src={environment} alt="environment" className="w-10 pb-2" />
                        <h1 className="text-xl font-bold">Sustainability at our core</h1>
                        <p className="text-sm tracking-tight">Our business decisions and goals are towards achieving carbon neutrality by 2022.</p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white ">
                <div className="flex justify-start  px-15 py-14 max-w-screen-xl mx-auto gap-5">
                    <div className="w-2/3 flex flex-col">
                        <div className="flex flex-row">
                            <div className="w-1/2 flex bg-green-100 items-center justify-center p-10 rounded-md">
                                <svg className="w-52 h-52 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4">
                                <path d="M8.5 14.25C8.5 16.17 10.08 17.75 12 17.75C13.92 17.75 15.5 16.17 15.5 14.25" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.80945 2L5.18945 5.63" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.1895 2L18.8095 5.63" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <path d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z" stroke="currentColor" stroke-width="1.5"/>
                                <path d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <div className="relative">
                                <div className="absolute flex items-center inset-y-0 -right-5">
                                    <svg className="w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4297 5.93018L20.4997 12.0002L14.4297 18.0702" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path opacity="0.4" d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col justify-center items-center p-10">
                                <h1 className="text-lg font-bold">Add products to cart</h1>
                                <p className="text-sm">Sign in and collect all your produce to cart.</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-1/2 flex flex-col justify-center items-center pl-0 p-7">
                                <h1 className="text-lg font-bold">Continue to payment</h1>
                                <p className="text-sm">Choose to pay now, pay on delivery or pay later.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute flex items-center inset-y-0 -right-5">
                                    <svg className="w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4297 5.93018L20.4997 12.0002L14.4297 18.0702" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path opacity="0.4" d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="w-1/2 flex bg-green-100 justify-center items-center p-10 rounded-md">   
                                <svg className="w-52 h-52 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 10H22" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.5502 20.4998H6.44025C2.89025 20.4998 1.99023 19.6198 1.99023 16.1098V7.88977C1.99023 4.70977 2.73026 3.68977 5.52026 3.52977C5.80026 3.51977 6.11025 3.50977 6.44025 3.50977H17.5502C21.1002 3.50977 22.0002 4.38977 22.0002 7.89977V12.3098" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path opacity="0.4" d="M6 16H10" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path opacity="0.4" d="M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C20.21 14 22 15.79 22 18Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path opacity="0.4" d="M16.4395 18L17.4294 18.99L19.5594 17.02" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 bg-green-100 flex flex-col justify-center  items-center p-10 rounded-md">
                        
                        <svg className="w-52 h-52 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5512 2H9.45117C7.65117 2 7.25118 2.90001 7.02118 4.01001L6.20117 7.92999H17.8012L16.9812 4.01001C16.7512 2.90001 16.3512 2 14.5512 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.2405 14.3199C19.3205 15.1699 18.6405 15.9 17.7705 15.9H16.4105C15.6305 15.9 15.5205 15.57 15.3805 15.15L15.2305 14.7199C15.0305 14.1299 14.9005 13.7299 13.8505 13.7299H10.1405C9.10054 13.7299 8.94054 14.1799 8.76054 14.7199L8.61054 15.15C8.47054 15.56 8.36054 15.9 7.58054 15.9H6.22054C5.35054 15.9 4.67054 15.1699 4.75054 14.3199L5.16055 9.89996C5.26055 8.80996 5.47054 7.91992 7.37054 7.91992H16.6205C18.5205 7.91992 18.7305 8.80996 18.8305 9.89996L19.2405 14.3199Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.2007 5.75H5.4707" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.5308 5.75H17.8008" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M7.65039 10.8301H9.8204" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M14.1797 10.8301H16.3497" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M12 17V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M12 21V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M3 18L2 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.4" d="M21 18L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className="flex flex-col justify-start items-center">
                            <h1 className="font-bold">Wait for your groceries</h1>
                            <p className="text-sm tracking-tight">We'll deliver as early as possible or according to your date preferences</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home