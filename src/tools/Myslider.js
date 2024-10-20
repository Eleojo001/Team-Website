import React, { useState, useEffect } from 'react';
import './Myslider.css'; // Import your CSS file for styling

const leaders = [
  {
    name: 'Govt. Caleb Mutfang',
    image: '/govt.jpeg',
  },
  {
    name: 'General Manager Mr. Ferdinand',
    image: '/gm.jpeg',
  },
  // Add more leaders as needed
];

const AboutLeaderCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % leaders.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + leaders.length) % leaders.length);
  };

  // Automatic sliding effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="aboutLeader">
      <div className="leaderCard">
        <div className="leaderImage">
          <img src={leaders[currentIndex].image} alt={leaders[currentIndex].name} />
        </div>
        <div className="LeaderInfo">
          <div className="LeaderInfoText">
            <h3>{leaders[currentIndex].name}</h3>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
      <div className="carouselControls">
        <p className='gobck'  onClick={prevSlide}>Previous</p>
        <button className='gobck' onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default AboutLeaderCarousel;