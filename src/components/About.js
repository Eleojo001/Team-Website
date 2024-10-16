import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

function About() {
  return (
    <div>
    <Nav/>
    <div className="aboutContainer">
    <h1>About Us</h1>
        <p>Plateau Jet SC is a dynamic football club founded in 2022 with a bold vision: to nurture young talents and redefine the future of football. Based in Plateau State, Nigeria, and sponsored by the government, Plateau Jet SC is committed to providing a platform for emerging footballers to excel and make their mark in the sport.
    <h3>Our Leadership</h3>
    <ul>
    <li>Team Manager: Mr. Ben</li>
    <li>General Manager: Mr. Ferdinand</li>
    <li>Sporting Director: Mr. Yohan</li>
    </ul>

    Our leadership team, comprised of experienced professionals, is dedicated to ensuring the development and success of our players on and off the pitch.

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
    </p>
    </div>
        
    <Footer/>
    </div>
  )
}

export default About