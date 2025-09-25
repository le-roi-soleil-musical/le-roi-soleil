import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Histoire from './components/Histoire.jsx'
import Characters from './components/Characters.jsx'
import Dates from './components/Dates.jsx'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50 text-stone-900">
      <Navbar/>
      <Hero/>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20">
        <Histoire/>
        <Characters/>
        <Dates/>
      </main>
    </div>
  )
}
