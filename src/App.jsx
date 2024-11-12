import React from 'react'
import Navbar from './components/Navbar'
import Highlights from './components/Highlights'
import Hero from './components/Hero'
import Model from './components/Model'
import Features from './components/Features'

const App = () => {
  return (
   <main className='bg-black'>
      <Navbar />
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
   </main>
  )
}

export default App

