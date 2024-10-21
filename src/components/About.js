import React, { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Aboutdata } from '../Api/Aboutdata'
import AboutLeaderCarousel from '../tools/Myslider'

function About() {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleBtn = () => {
    setIsExpanded(!isExpanded)
  }
  const image = '/bgPlateauJet.jpeg'
  return (
    <div>
    <Nav/>
    <div className="aboutContainer">
      <div className="aboutBg">
    <h1 className='abtheader'>About Us</h1>
    <div className="aboutImg">
      <img src='/bgPlateauJet.jpeg' alt="" />
    </div>
    
      </div>
          <p className='aboutContent'> {
              Aboutdata.map((item)=>{
                return <p> { isExpanded ? `${item.content}`: `${item.content.substring(0, 700)}...`} <a className='readmore' onClick={toggleBtn}>
              
                {isExpanded ? 'Show less' : 'Read more'}
              </a></p>
              })

            }
            
    </p>
    <h1 className='space mke'>Our <span className='partHeader'>Leaders</span></h1>


    <div className="leaders">
      <AboutLeaderCarousel/>
    {/* <div className="aboutLeader">
      <div className="leaderCard">
        
        <div className="leaderImage">
          <img src="/govt.jpeg" alt="" />
        </div>
        <div className="LeaderInfo">
        <div className="LeaderInfoText">
          <h3>Govt. Caleb Mutfang</h3>
          <a href="#">Read more</a>
        
        </div>
        
        </div>
        
      </div>
      <div className="leaderCard">
        
        <div className="leaderImage">
          <img src="/gm.jpeg" alt="" />
        </div>
        <div className="LeaderInfo">
        <div className="LeaderInfoText">
          <h3>  General manager <br />  Mr Fedinand</h3>
          <a href="#">Read more</a>
        
        </div>
        
        </div>
        
      </div>
      <div className="leaderCard">
        
        <div className="leaderImage">
          <img src="/govt.jpeg" alt="" />
        </div>
        <div className="LeaderInfo">
        <div className="LeaderInfoText">
          <h3>Team Manager <br /> Mr Ben</h3>
          <a href="#">Read more</a>
        
        </div>
        
        </div>
        
      </div>
      <div className="leaderCard">
        
        <div className="leaderImage">
          <img src="/govt.jpeg" alt="" />
        </div>
        <div className="LeaderInfo">
        <div className="LeaderInfoText">
          <h3>Sporting Director <br /> Mr. Yohan</h3>
          <a href="#">Read more</a>
        
        </div>
        
        </div>
        
      </div>
      
    </div> */}

      
    </div>
    <div className="leaderContent">
    <p>
    Our leadership team, comprised of experienced professionals, is dedicated to ensuring the development and success of our players on and off the pitch.</p>
    
    </div>



    <h3>Coaching Staff</h3>
    Our coaching team is spearheaded by:
    <ul>
    <li>Coach Celeb</li>
    <li>Coach Dantoro</li>
    </ul>
    Together, they work tirelessly to train, mentor, and guide our players to achieve their fullest potential, both technically and tactically.

    <h3>Backroom Team</h3>
    We pride ourselves on having a complete and well-rounded backroom staff that provides comprehensive support to the team:
    <ul>
    <li>Medical Team: Ensures the players’ health and fitness.</li>
    <li>Social Media Manager: Handles our digital presence, keeping fans and followers engaged.</li>
    <li>Team Scout: Discovers and recruits promising talents to strengthen our squad.</li>
    </ul>
    At Plateau Jet SC, our goal is to raise the next generation of football stars and revolutionize the game.
    With a solid foundation and a dedicated team behind us, we are committed to making our mark in the world of football.
    </div>
        
    <Footer/>
    </div>
  )
}

export default About