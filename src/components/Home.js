import React from 'react'
import Nav from './Nav'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import Footer from './Footer'
import BackToTop from '../tools/BackToTop'

function Home() {
  return (
    <div>
        <Nav/>
        <SectionOne/>
        <SectionTwo/>
        <Footer/>
        <BackToTop/>
    </div>
  )
}

export default Home