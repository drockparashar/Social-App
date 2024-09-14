"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function LandingPage() {
  const [isHoveredGetStarted, setIsHoveredGetStarted] = useState(false)
  const [isHoveredLogin, setIsHoveredLogin] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 max-w-3xl w-full text-center space-y-16">
        <header className="space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight">
            Connect<span className="text-yellow-400">.</span> Share<span className="text-yellow-400">.</span> Thrive<span className="text-yellow-400">.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-indigo-200 font-medium">
            Your new favorite social media experience
          </p>
        </header>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button
            asChild
            className={`w-64 h-16 text-xl font-bold transition-all duration-300 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white rounded-full transform ${
              isHoveredGetStarted ? 'scale-105 shadow-lg' : ''
            }`}
            onMouseEnter={() => setIsHoveredGetStarted(true)}
            onMouseLeave={() => setIsHoveredGetStarted(false)}
          >
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button
            asChild
            className={`w-64 h-16 text-xl font-bold transition-all duration-300 bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 rounded-full transform ${
              isHoveredLogin ? 'scale-105 shadow-lg' : ''
            }`}
            onMouseEnter={() => setIsHoveredLogin(true)}
            onMouseLeave={() => setIsHoveredLogin(false)}
          >
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>

      <div className="relative z-10 mt-16 flex justify-center space-x-6">
        <span className="text-5xl animate-bounce">🌟</span>
        <span className="text-5xl animate-bounce delay-100">📸</span>
        <span className="text-5xl animate-bounce delay-200">🚀</span>
      </div>

      <footer className="relative z-10 mt-16 text-center text-white text-sm opacity-75">
        <p>&copy; 2023 YourSocialApp. All rights reserved.</p>
      </footer>
    </div>
  )
}