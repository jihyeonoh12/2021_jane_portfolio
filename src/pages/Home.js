
import React from 'react';
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Herobanner from '../components/Herobanner'
import Footer from '../components/Footer'

function Home () {
    return (
    <div className="App mt-[150px]">
      <Navbar />
      <Herobanner />
      <Body />
    </div>
    )
}

export default Home