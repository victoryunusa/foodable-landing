import React from 'react'
import logo from '../assets/images/landing.jpeg'

const Home = () => {
    return (
        <div className="flex justify-between px-15 py-8 max-w-screen-xl mx-auto">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold pt-4 tracking-tighter leading-tight">Sourcing the freshest ingredients for your restaurant.</h1>
                <p>You get food from the best growers, without having to look for them or organise delivery yourself; and their products are fresh because you get your produce direct from the source.</p>
            </div>
            <div className="flex-1 flex flex-col relative">
                <img className="max-w-xl self-end" src={logo} alt="landing.png" />
                <div className="absolute -right-6 top-32 flex flex-col py-5 px-7 rounded-md shadow-xl bg-neutral-200/50 backdrop-blur-xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                    <div className="font-bold">Fast delivery</div>
                    <div>2 hours delivery 🚀</div>
                </div>
            </div>
        </div>
    )
}

export default Home
