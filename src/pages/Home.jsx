import React from 'react'
import logo from '../assets/images/landing-2.png'
import retail from '../assets/images/price-tag.png'
import delivery from '../assets/images/delivery-truck.png'
import environment from '../assets/images/environment.png'

const Home = () => {
    return (
        <>
            <div className="flex justify-between px-15 py-8 max-w-screen-xl mx-auto">
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold pt-4 tracking-tighter leading-tight pb-4">Sourcing the <span className="text-green-600">freshest</span> ingredients for your restaurant.</h1>
                    <p className="leading-relaxed tracking-wide">Join our community of leading caterers, restaurateurs and hospitality businesses who enjoy better buying power whilst ensuring fair pricing, traceability and quality across all produce categories.</p>
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
                <div className="flex justify-center  px-15 py-14 max-w-screen-xl mx-auto">
                    <div className="w-1/3 border-r-2 border-neutral-700 mr-4">
                        <img src={retail} alt="retail" className="w-10 pb-5" />
                        <h1 className="text-xl font-bold">Retail prices</h1>
                        <p>Same prices as your local supermarket & no minimum order value.</p>
                    </div>
                    <div className="w-1/3 border-r-2 border-neutral-700 mr-4">
                        <img src={delivery} alt="delivery" className="w-10 pb-5" />
                        <h1 className="text-xl font-bold">Instant delivery</h1>
                        <p>Timing is everything. We’ll be at your door before you know it.</p>
                    </div>
                    <div className="w-1/3">
                        <img src={environment} alt="environment" className="w-10 pb-5" />
                        <h1 className="text-xl font-bold">Sustainability at our core</h1>
                        <p>Our business decisions and goals are towards achieving carbon neutrality by 2022.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
