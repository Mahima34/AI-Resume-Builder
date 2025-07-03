import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import Header from '../components/custom/Header'
import Dashboard from '@/dashboard'

function Home() {
  return (
    <div>
      <Header/>
      <Dashboard/>
    </div>
  )
}

export default Home
