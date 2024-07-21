import React from "react";
import "../styles/Hero.css";

export default function Hero() {
    return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/assets/portforlio1.jpg")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-8">We're glad you're here. Discover our amazing services.</p>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>

    )
}