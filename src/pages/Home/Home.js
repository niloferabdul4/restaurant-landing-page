import React from 'react'
import Hero from '../../containers/Hero/Hero'
import About from '../../containers/About/About'
import SpecialMenu from '../../containers/SpecialMenu/SpecialMenu'
import Chef from '../../containers/Chef/Chef'
import Laurels from '../../containers/Laurels/Laurels'
import Gallery from '../../containers/Gallery/Gallery'
import FindUs from '../../containers/FindUs/FindUs'
import Footer from '../../containers/Footer/Footer'
import '../../App.css'
const Home = () => {
  return (
    <div className='app_bg'>
      <Hero/>
      <About/>
      <SpecialMenu/>
      <Chef/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  )
}

export default Home
