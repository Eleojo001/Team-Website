import React from 'react'

function SectionOne() {
  return (
    <div className='sectionOneContainer'>
    <div className="background-container">
      <div className="overlay">
        {/* Overlay content here */}
        <h1>About us</h1>
        <p>Plateau Jet SC is a dynamic football club founded in 2022,
         with a bold vision: to nurture young talents and redefine the future of football.
        Based in Plateau State, Nigeria, and sponsored by the government, <br />
        Plateau Jet SC is committed to providing a platform for emerging footballers to excel and make their mark in the sport...</p>
        <button className="readmore">
        <a href="/about">Read more</a>
        </button>
        
      </div>
    </div>

    </div>
  )
}

export default SectionOne