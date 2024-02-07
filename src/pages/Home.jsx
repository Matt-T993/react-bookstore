import React from 'react'
import Landing from '../components/Landing'
import Features from '../components/Features'
import Discounted from '../components/Discounted'
import Explore from '../components/Explore'
import Footer from '../components/Footer'
import Highlights from '../components/Highlights'

const Home = ({books}) => {
  return (
    <>
      <Landing/>
      <Highlights/>
      <Features books={books}/>
      <Discounted books={books}/>
      <Explore/>
      <Footer/>
    </>
  )
}

export default Home